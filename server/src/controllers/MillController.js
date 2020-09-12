const crypto = require('crypto');
const connection = require("../database/connections");
const { response } = require('express');

module.exports = {

    async index(req,res){
        const filter = req.query;

        const name = String(filter.name);

        const mill = await connection('mills')
            .where('name', name)
            .select('*');

        if(!filter.name){
            return res.status(400).json({
                error: 'Missing filters to search mill'
            })
        }

        if(mill.length==0){
            return res.status(404).json({
                error: 'There is no mill with this datas'
            })
        }

        return res.json(mill);
    },

    async create(req,res){

        const data = req.body;

        const name = String(data.name);
        
        const harvests_id = String(data.harvests_id)
            .split(',')
            .map((id) => id.trim());
        
        const id = crypto.randomBytes(4).toString('HEX');

        const mill = {
            id,
            name,
            harvests_id
        };
        const idsExists = await connection('harvests').select('*').whereIn('id',data.harvests_id);

        if(name.length==0){
            return res.status(400).json({
                error: 'Registration error'
            })
        }

        if(idsExists.length == 0){
            return res.status(404).json({
                error: 'Invalid id(s) '
            })
        }

        try {
            await connection('mills').insert(mill);
        } catch (error) {
            return res.status(400).json({
                error: 'Registration error'
            })
        }       

        return res.json(mill);
    },
}
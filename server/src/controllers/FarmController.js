const crypto = require('crypto');
const connection = require("../database/connections");
const knexfile = require('../../knexfile');

module.exports = {

    async index(req,res){
        const filter = req.query;

        const farm = await connection('farms')
            .where({
                name: String(filter.name),
                id: String(filter.id)
            }).select('*');

        if(!filter.name){
            return res.status(400).json({
                error: 'Missing filters to search farm'
            })
        }

        if(farm.length==0){
            return res.status(404).json({
                error: 'There is no farm with this datas'
            })
        }

        return res.json(farm);
    },

    async create(req,res){

        const data = req.body;

        const name = String(data.name);
        const fields_id = Array(data.fields_id).join(',');

        
        const id = crypto.randomBytes(4).toString('HEX');
        
        const farm = {
            id,
            name,
            fields_id
        };

        const idsExists = await connection('fields').select('*').whereIn('id',data.fields_id);

        if(idsExists.length == 0){
            return res.status(404).json({
                error: 'Invalid id(s) '
            })
        }

        try {
            await connection('farms').insert(farm);
        } catch (error) {
            return res.status(400).json({
                error: 'Registration error'
            })
        }

        return res.json(farm);
    },
}
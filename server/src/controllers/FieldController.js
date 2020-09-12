const crypto = require('crypto');
const connection = require("../database/connections");

module.exports = {
    
    async index(req,res){
        const filter = req.query;

        const id = String(filter.id);

        const field = await connection('fields')
            .where('id', id)
            .select('*');

        if(!filter.id){
            return res.status(400).json({
                error: 'Missing filters to search field'
            })
        }

        if(field.length==0){
            return res.status(404).json({
                error: 'There is no field with this id'
            })
        }

        return res.json(field);  
    },

    async create(req,res){
        const { latitude, longitude } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        if(latitude==0 || longitude==0){
            return res.status(400).json({
                error: 'Registration error'
            })
        }

        try {
            await connection('fields').insert({
                id,
                latitude,
                longitude
            })
        } catch (error) {
            return res.status(400).json({
                error: 'Registration error'
            })
        }

        return res.json({
            id,
            latitude,
            longitude
        });
    }
}
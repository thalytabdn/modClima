const crypto = require('crypto');
const connection = require("../database/connections");

module.exports = {

    async index(req,res){
        const filter = req.query;

        const harvest = await connection('harvests')
            .where({
                start_date: String(filter.start_date),
                end_date: String(filter.end_date)
            }).select('*');

        if(!filter.end_date || !filter.start_date){
            return res.status(400).json({
                error: 'Missing filters to search harvest'
            })
        }

        return res.json(harvest);
    },

    async create(req,res){

        const data = req.body;

        const start_date = String(data.start_date);
        const end_date = String(data.end_date);
        
        const farms_id = String(data.farms_id)
            .split(',')
            .map((id) => id.trim());
        
        const id = crypto.randomBytes(4).toString('HEX');

        const harvest = {
            id,
            start_date,
            end_date,
            farms_id
        };

        await connection('harvests').insert(harvest);

        return res.json(harvest);
    },
}
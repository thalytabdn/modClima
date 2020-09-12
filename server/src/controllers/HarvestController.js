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

        if(harvest.length==0){
            return res.status(404).json({
                error: 'There is no harvest with this datas'
            })
        }

        return res.json(harvest);
    },

    async create(req,res){

        const data = req.body;

        const start_date = String(data.start_date);
        const end_date = String(data.end_date);
        const farms_id = Array(data.farms_id).join(',');
        
        const id = crypto.randomBytes(4).toString('HEX');

        const harvest = {
            id,
            start_date,
            end_date,
            farms_id
        };

        const idsExists = await connection('farms').select('*').whereIn('id',data.farms_id);

        if(start_date==null || end_date==null ){
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
            await connection('harvests').insert(harvest);
        } catch (error) {
            return res.status(400).json({
                error: 'Registration error'
            })
        }

        return res.json(harvest);
    },
}
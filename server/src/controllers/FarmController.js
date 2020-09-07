const crypto = require('crypto');
const connection = require("../database/connections");

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

        return res.json(farm);
    },

    async create(req,res){

        const data = req.body;

        const name = String(data.name);
        const fields_id = String(data.fields_id)
            .split(',')
            .map((id) => id.trim());
        
        const id = crypto.randomBytes(4).toString('HEX');

        const farm = {
            id,
            name,
            fields_id
        };

        await connection('farms').insert(farm);

        return res.json(farm);
    },

    /**Função para adicionar novas fields a determinado item da tabela */

    // async update(req,res){
    //     const data = req.body;

    //     const id = String(data.id);
    //     const fields_id = String(data.fields_id)
    //     .split(',')
    //     .map((id) => id.trim());

    //     await connection('farms')
    //         .update('fields_id', fields_id)
    //         .where('id','=',id);
    // }
}
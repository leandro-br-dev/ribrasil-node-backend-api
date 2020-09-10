const database = require("../models");

class ClientController{

    static async findAll(req, res){

        try {
            const allClients = await database.TB_Clients.findAll();
            return res.status(200).json(allClients);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }

    static async findOne(req, res){

        const { id } = req.params;
        try {
            const oneClient = await database.TB_Clients.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(oneClient);
        } catch {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res){

        const newClient = req.body;
        try {
            const createdClient = await database.TB_Clients.create( newClient ); 
            return res.status(200).json(createdClient);
        } catch {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res){

        const { id } = req.params;
        const updateClient = req.body;
        try {
            await database.TB_Clients.update(updateClient, { 
                where: 
                { 
                    id: Number(id) 
                } 
            } );   

            const updatedClient = await database.TB_Clients.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(updatedClient);
        } catch {
            return res.status(500).json(error.message);
        }
    }


    static async delete(req, res){

        const { id } = req.params;
        try {
            await database.TB_Clients.destroy( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json({mensagem: `id ${id} deletado`});
        } catch {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = ClientController
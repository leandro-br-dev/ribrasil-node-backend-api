const database = require("../models");

class UserController{

    static async findAll(req, res){

        try {
            const allUsers = await database.TB_Users.findAll();
            return res.status(200).json(allUsers);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }

    static async findOne(req, res){

        const { id } = req.params;
        try {
            const oneUser = await database.TB_Users.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(oneUser);
        } catch {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res){

        const newUser = req.body;
        try {
            const createdUser = await database.TB_Users.create( newUser ); 
            return res.status(200).json(createdUser);
        } catch {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res){

        const { id } = req.params;
        const updateUser = req.body;
        try {
            await database.TB_Users.update(updateUser, { 
                where: 
                { 
                    id: Number(id) 
                } 
            } );   

            const updatedUser = await database.TB_Users.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(updatedUser);
        } catch {
            return res.status(500).json(error.message);
        }
    }


    static async delete(req, res){

        const { id } = req.params;
        try {
            await database.TB_Users.destroy( { 
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

module.exports = UserController
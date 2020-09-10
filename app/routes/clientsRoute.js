const { Router }        = require('express'),
        routes          = Router(),
        ClientController  = require('../controllers/ClientController');       


    routes.get('/clients', ClientController.findAll);
    routes.get('/clients/:id', ClientController.findOne);
    routes.post('/clients', ClientController.create);
    routes.put('/clients/:id', ClientController.update);
    routes.delete('/clients/:id', ClientController.delete);

module.exports = routes;
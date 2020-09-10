const { Router }        = require('express'),
        routes          = Router(),
        UserController  = require('../controllers/UserController');       


    routes.get('/users', UserController.findAll);
    routes.get('/users/:id', UserController.findOne);
    routes.post('/users', UserController.create);
    routes.put('/users/:id', UserController.update);
    routes.delete('/users/:id', UserController.delete);

module.exports = routes;
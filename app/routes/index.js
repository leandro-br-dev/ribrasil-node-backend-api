const UserController = require('../controllers/UserController');
const ClientController = require('../controllers/ClientController');

const { Router } = require('express'),
        routes   = Router(),
        clients = require('./clientsRoute'),
        users    = require('./usersRoute');        


    routes.use(users);
    routes.use(clients); 

module.exports = routes;
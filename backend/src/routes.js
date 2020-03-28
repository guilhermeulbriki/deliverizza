const express = require('express');

const PizzariaController = require('./controllers/PizzariaController');
const UserController = require('./controllers/UserController');
const OrderController = require('./controllers/OrderController');
const SessionsController = require('./controllers/SessionsController');

const routes = express.Router();

routes.get('/user/:id', UserController.index);
routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

routes.get('/pizzaria', PizzariaController.index);
routes.post('/pizzaria', PizzariaController.create);
routes.put('/pizzaria/:id', PizzariaController.update);
routes.delete('/pizzaria/:id', PizzariaController.delete);

routes.get('/order', OrderController.index);
routes.post('/order', OrderController.create);
routes.put('/order/:id', OrderController.update);
routes.delete('/order/:id', OrderController.delete);

routes.post('/session/user', SessionsController.userLogon);
routes.post('/session/pizzaria', SessionsController.pizzariaLogon);

module.exports = routes;

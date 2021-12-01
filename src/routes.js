const routes = require('express').Router();

const LinkController = require('./app/controllers/LinkController');

// Messages
routes.post('/createLink', LinkController.insert);
// routes.put('/changeMessage/:id', PostController.update);
// routes.delete('/removeMessage/:id',  PostController.delete);

module.exports = routes;
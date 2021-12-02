const routes = require('express').Router();

const LinkController = require('./app/controllers/LinkController');

routes.post('/createLink', LinkController.insert);
routes.get('/:code', LinkController.select);
routes.get('/:code/statistics', LinkController.statistics);

module.exports = routes;
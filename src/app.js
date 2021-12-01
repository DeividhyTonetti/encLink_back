require('dotenv').config({
  path: process.env.NODE_ENV?.trim() === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const cors = require('cors');

class AppController {
  constructor() {
    this.express = express();
    this.cors = cors({ origin: true });
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(this.cors)
  }

  routes() {
    this.express.use(require('./routes'));
  }
}

module.exports = new AppController().express;
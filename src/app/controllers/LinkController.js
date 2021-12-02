const { Link } = require('../models');

class LinkController {
  async insert(req, res) {
    const { url } = req.body;

    let code = '';
    const options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i<6; i++) {
      const randonValue = Math.floor(Math.random() * options.length);
      code += options.charAt(randonValue);
    }
    
    try {
      const createPosts = await Link.create({ url, code });
      const newLink = `${process.env.APP_URL}:${process.env.PORT}/${code}`

      res.status(200).send(JSON.stringify(newLink, null, 2));
    } catch (error) {
      res.status(200).json({ message: 'Error in Link creation'});
    }
  }

  async select(req, res) { 
    const { code }= req.params;

    const link = await Link.findOne({
      where: {
        code,
      }
    });

    if(link) {
      let { id, url, hits, } = link;
      hits++;

      const updateCustomers = await Link.update({ hits }, {
        where: {
          id,
        }
      });

      res.status(200).send(JSON.stringify(url, null, 2));
    } else {
      res.status(404).json({ message: 'Link does not exist'});
    }
  }
  async statistics(req, res) { 
  
  }
}

module.exports = new LinkController();
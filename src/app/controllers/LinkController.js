const { Link } = require('../models');

class LinkController {
  async insert(req, res) {
    const { message } = req.body;

    let text = '';
    const options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i<6; i++) {
      const randonValue = Math.floor(Math.random() * options.length);
      text += options.charAt(randonValue);
    }
     
      // const createPosts = await Link.create({ message });
  
      // res.status(200).json({ message: 'Created Message succesfull'});
  }

  // async delete(req, res) { 
  //   const { id } = req.body;

  //   const post = await Posts.findOne({
  //     where: {
  //       id,
  //     }
  //   });

  //   if(post) {
  //     const deletePosts = await Posts.destroy({
  //       where: {
  //         id
  //       }
  //     });
  
  //     res.status(200).json({ message: 'Deleted Message succesfull'});
  //   } else {
  //     res.status(200).json({ message: 'Message does not exist'});
  //   }
  // }

  // async update(req, res) { 
  //   const { id, message } = req.body;

  //   const post = await Posts.findOne({
  //     where: {
  //       id,
  //     }
  //   });

  //   if(post) {
  //     const updatePosts = await Posts.update({ message }, {
  //       where: {
  //         id,
  //       }
  //     });
      
  //     res.status(200).json({ message: 'Message Updated with success'});
  //   } else {
  //     res.status(200).json({ message: 'Message does not exist'});
  //   }
  // }
}

module.exports = new LinkController();
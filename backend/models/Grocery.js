const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let grocerySchema = new Schema({
  name: {
    type: String
  },
  quantity: {
    type: String
  }
}, {
    collection: 'groceries'
  })

module.exports = mongoose.model('Groceries', grocerySchema)
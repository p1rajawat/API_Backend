const { string } = require('i/lib/util');
const mongoose = require('mongoose');
const { type } = require('os');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type:string,
    required:true
  },

  image: {
    public_id: String,
    url: String
  }
});

module.exports = mongoose.model('Teacher', productSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config').get(process.env.NODE_ENV);
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  name: {
    type: String,
    maxlength: 100
  },
  lastname: {
    type: String,
    maxlength: 100
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = { User }
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  body: String,
  created_at: Date,
  active: Boolean,
  user: String // Store the user reference (email field)
});

module.exports = mongoose.model('Post', PostSchema);
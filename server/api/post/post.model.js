'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  body: String,
  created_at: Date,
  active: Boolean
});

module.exports = mongoose.model('Post', PostSchema);
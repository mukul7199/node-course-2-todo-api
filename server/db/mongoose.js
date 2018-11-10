var mongoose = require('mongoose');
const keys = require('./keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.URI);

module.exports = {mongoose};
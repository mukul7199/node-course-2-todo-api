var mongoose = require('mongoose');
const keys = require('./keys');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
var mongoose = require('mongoose');

//set mongoos to use promises
mongoose.Promise = global.Promise;
//connect to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};
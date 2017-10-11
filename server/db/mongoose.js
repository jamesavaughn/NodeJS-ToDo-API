var mongoose = require('mongoose');

//set mongoos to use promises
mongoose.Promise = global.Promise;
//connect to database
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};
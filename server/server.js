//server.js is the root file to run program

//library imports
var express = require('express');
var bodyParser = require('body-parser');


//local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//set app variable to open server
var app = express();

//set middleware to send json to express application
app.use(bodyParser.json());

//configure POST route
//send JSON object to server, server gets text property, create new model and send the completed model back to client
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) =>{ //creates new todo instance
        res.send(doc); //sends back user ID
    }, (e) => {
        res.status(400).send(e); //send http status error back
    });
    //console.log(req.body); //returns body text back to condsole
});

//configure GET routes


app.listen(3000, () =>{
    console.log('started on port 3000');
});

module.exports = {app};
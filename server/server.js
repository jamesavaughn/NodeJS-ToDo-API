//server.js is the root file to run program

//library imports
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


//local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//set app variable to open server
var app = express();

//set Heroku port or local port
const port = process.env.PORT || 3000;

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
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/12345324
//create an id variable on the request object
app.get(`/todos/:id`, (req, res) => {
    var id = req.params.id;
      if (!ObjectID.isValid(id)){
          return res.status(404).send();
          console.log('ID not valid');
        }
        Todo.findById(id).then((todo) => {
            if(!todo) {
                return res.status(404).send();
            }
            res.send({todo}); // send back todo object
        }).catch((e) => {
            res.status(400).send();
        });
});

app.listen(port, () =>{
    console.log(`started at port ${port}`);
});

module.exports = {app};
## NodeJS and MongoDB ##

## Description ##

Sample node test cases using assertion modules.
Scripts for CRUD Operations

C: Create documents

R: Remove documents

U: Update documents

D: Delete documents


## Functionality ##

## Run instructions ##
` $ npm run test-watch `


## Key Concepts & Topics ## 

* MongoDB installation and setup
* MongoDB server connections
* Node Mongo package
* Robo3T 
* Creating collections
* Inserting documents
* Fetching Data
* Object destructuring
* Express module
* Body Parser module
* Validators
* Rest APIs
* Testing (`npm install expect mocha nodemon supertest --save-dev`)
* Heroku

## Details ##
Getting started with MongoDB is quick and simple. Follow these steps to get going.

1. Swing by https://www.mongodb.com/ to download the latest version compatible with your operating system
2. Make a directory mkdir mongo in your terminal
3. Unzip the archive into this directory
4. Make a directory for your MongoDB data `mkdir mongo-data`
5. Navigate to mongo/bin
6. Start the MongoDB server and set path to data `$ ./mongod --dbpath ~/mongo-data`   >> "waiting for connections on port 27017"
7. Open a second terminal in the same directory
8. Run MongoDB shell $ ./mongo  >> MongoDB shell version v3.4.9connecting to: mongodb://127.0.0.1:27017MongoDB server version: 3.4.9 Welcome to the MongoDB shell.For interactive help, type "help".
9. Start experimenting with some db.Todos( ) functions

Tip: Download RoboMongo a GUI for managing MongoDB!

Tip: Download the npm library and connect to the database MongoDB NPN library

$ npm install mongodb --save

SQL vs. No SQL
Database = Database
Table = Collection
Row/Record = Document { }
Column =  Field

Note: Documents in NoSQL don't don't need to be the same


** Unique Object Id **

- 12 byte value
- timestamp (4 bytes)
- machine identifier (3 bytes)
- process id (2 bytes)
- counter (3 bytes)
you can change the ObjectId by setting that property if you need to


## Fetching Data ##

// returns all values
        `db.collection('Todos').find().toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));

        }, (err) => {
            console.log('Unable to fetch todos', err); //logs error object and prints to condole
        });

** queries based on certain values **
** query based on ObjectID because we deconstructed the mongodb object **

 `db.collection('Todos').find({
            _id: new ObjectID('59d689be1a906972ba207f56') 
        }).toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));

        }, (err) => {
            console.log('Unable to fetch todos', err); //logs error object and prints to condole
        });

mongodb.github.io/ documentation for toArrayResultsCallback


## Test Cases Example ##

### package.json modifications ###
`"scripts": {

    "test": "mocha server/**/*.test.js",

    "test-watch": "nodemon --exec 'npm test'"`

1) Verifies that todo was created correctly

### load test libraries ###

`const expect = require('expect');
const request = require('supertest');`

### load local libraries ###
`const {app} = require('./../server');
const {Todo} = require('./../models/todo');`

### clears out database ###
`beforeEach((done) => {
    Todo.remove({}).then(() => done());
});`

### describe block ###
`describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app) //request via supertest passing in the app
        .post('/todos') //post request 
        .send({text}) //send data with body, converted to JSON
        .expect(200) //assertion on status code
        .expect((res) => {
            expect(res.body.text).toBe(text); //customer assertion to test body text
        })
        .end((err, res) => { //callback to handle errors
            if (err) {
                return done(err); //returns error if error
            }
            
            Todo.find().then((todos) => { //finds todo then runs assertions
                expect(todos.length).toBe(1); //checks length of new todo array to be 1
                expect(todos[0].text).toBe(text); //checks text in first todo element
                done();
            }).catch((e) => done(e)); //catch call to catch other errors

        })

    });
});`

## NodeJS and MongoDB ##

## Description ##

Sample node test cases using assertion modules.
Scrips for CRUD Operations
C: Create documents
R: Remove documents
U: Update documents
D: Delete documents


## Functionality ##

## Run instructions ##
` $ npm run test-watch `


## Key Concepts ## 

* MongoDB installation and setup
* MongoDB server connections
* Node Mongo package
* Robo3T 
* Creating collections
* Inserting documents
* Fetching Data
* Object destructuring

## Details ##
Getting started with MongoDB is quick and simple. Follow these steps to get going.

Swing by https://www.mongodb.com/ to download the latest version compatible with your operating system
Make a directory mkdir mongo in your terminal
Unzip the archive into this directory
Make a directory for your MongoDB data mkdir mongo-data
Navigate to mongo/bin
Start the MongoDB server and set path to data $ ./mongod --dbpath ~/mongo-data   >> "waiting for connections on port 27017"
Open a second terminal in the same directory
Run MongoDB shell $ ./mongo  >> MongoDB shell version v3.4.9connecting to: mongodb://127.0.0.1:27017MongoDB server version: 3.4.9Welcome to the MongoDB shell.For interactive help, type "help".
Start experimenting with some db.Todos( ) functions
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
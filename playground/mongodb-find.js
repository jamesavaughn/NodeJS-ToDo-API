//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2)); //.ops stores all docs that were inserted into the database

         //.find() returns documents .toArray() returns a promise and documents in an array .then(doc) lets you print to screen and handle erros 
        // db.collection('Todos').find({
        //     _id: new ObjectID('59d689be1a906972ba207f56') //can query based on ObjectID because we deconstructed the mongodb object
        // }).toArray().then((docs) => {
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, undefined, 2));

        // }, (err) => {
        //     console.log('Unable to fetch todos', err); //logs error object and prints to condole
        // });

        //###### Counting Query ########
        // db.collection('Todos').find().count().then((count) => {
        //     console.log(`Todos count: ${count}`);

        // }, (err) => {
        //     console.log('Unable to fetch todos', err); //logs error object and prints to condole
        // });

         db.collection('Users').find({
            name: 'Jennifer'  //can query based on ObjectID because we deconstructed the mongodb object
        }).toArray().then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));

        }, (err) => {
            console.log('Unable to fetch Users', err); //logs error object and prints to condole
        });
    });


    //db.close(); //closes the connection
//}); 
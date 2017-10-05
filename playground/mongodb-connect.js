//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

//connect to database
//.connect takes URL and callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2)); //.ops stores all docs that were inserted into the database
    });

    //ex) Insert new doc into Users Collection (name, age, location string)
    // db.collection('Users').insertOne({
    //     name: 'James Vaughn',
    //     age: 40,
    //     location: "San Francisco"
    // }, (err, result) => { //callback function with error and result object
    //     if (err) {
    //         return console.log('Unable to insert User', err);
    //     }
        
    //     console.log(result.ops[0]._id.getTimestamp()); //.ops will show all records inserted ._id will show the id in the terminal and .getTimeStamp()) will show time
        // console.log(JSON.stringify(result.ops[0]._id.getTimeStamp(), undefined, 2)); //.ops show all records that were inserted into the database
         
    });

    db.close(); //closes the connection
}); 
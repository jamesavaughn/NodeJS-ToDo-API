//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');

    //deleteMany -- deletes many documents
    // db.collection('Todos').deleteMany({
    //     text: "Eat lunch"
    // }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne -- deletes the first item that matches criteria then stops
    // db.collection('Todos').deleteOne({
    //     text: "Something to do remove"
    // }).then((result) => {
    //     console.log(result);
    // });
    
    //findOneAndDelete -- returns and deletes value so you can tell the user what was deleted
    db.collection('Todos').findOneAndDelete({
        completed: false
    }).then((result) => {
        console.log(result);
    });
    //db.close(); //closes the connection
}); 
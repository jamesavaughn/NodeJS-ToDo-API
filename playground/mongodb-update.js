//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');

    // change name to James Anthony Vaughn
    // incerement age by +1

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('59dd18c28ee68174bf4e4af3')
    }, {
        $set: {
            name: "James Anthony Vaughn"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    // db.close(); //closes the connection
}); 
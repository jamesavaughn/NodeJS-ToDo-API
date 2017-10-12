const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59de90a660f7c14220c224e7';

// if (!ObjectID.isValid()){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Tosos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));


//users collection
//load user mongoose model
//find by id user in db
//set up error message
//if id is found, print user to the screen

var id = '59dfa3d8f118c4b359238c27';

User.findById(id).then((User) => {
    if (!User) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(User, undefined,1));
}, (e) => {
        console.log(e);
    });
//     console.log('User by Id', User);
// }).catch((e) => console.log(e0));
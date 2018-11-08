const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('../server/models/user');

// var id = '5be3dfccd065371f30637ff21';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
//     console.log('TodobyId', todo);
// });

var UserID = '5be1a25d2e8e9c07f8dbd0ae';

User.findById(UserID).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User:', user);
}).catch((e) => {
    console.log(e);
});
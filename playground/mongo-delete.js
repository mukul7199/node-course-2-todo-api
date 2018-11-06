// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Mukul'}).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5be038eb030c141c3c5b4f09')}).then((val) => {
        console.log(`${val.value.name} object was deleted`);
    })

    // db.collection('Todos').find().toArray().then((v) => {
    //     console.log(v);
    // }, (err) => {
    //     console.log(err);
    // });

    // db.close();
});
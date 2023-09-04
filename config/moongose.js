const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1/socialnetwork_Development');;

const db=mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to db"));

db.once('open',()=>{
    console.log("Connected to the Database: MongoDB");
});

module.exports =db;
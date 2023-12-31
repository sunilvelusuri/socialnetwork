const mongoose=require('mongoose');
// const { post } = require('../routes');
const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }

},{
    timestamps:true
});

const Post=mongoose.model('post',postSchema);
module.exports =Post;
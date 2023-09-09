const Post= require('../models/posts');

module.exports.createPost =(req,res)=>{
    Post.create({
        content: req.body.content,
        user:req.user._id
    },(err,post)=>{
        if(err){
            console.log('We got error while creating user for siginig up',err);
            return;
        }
        return res.redirect('back');
    });
}
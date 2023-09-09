const Post=require('../models/posts');

module.exports.home = async (req,res)=>{

    // Post.find({},(err,post)=>{
    //     return res.render('home',{
    //         title: 'Home',
    //         posts_feed:post
    //     });
    // });

    Post.find({}).populate('user').exec((err,post)=>{
        if(err){
            console.log(err);
        }else{
            return res.render('home',{
                title: 'Home',
                posts_feed:post
            });
        }
    });
}
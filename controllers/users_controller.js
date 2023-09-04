const User= require('../models/user');

module.exports.profile=(req,res)=>{
    return res.render('user_profile',{
        title:'profile',
    });
}

module.exports.signup=(req,res)=>{
    return res.render('signup',{
        title:'signup page'
    });
}

// Render the signin page

module.exports.signin=(req,res)=>{
    return res.render('signin',{
        title:'signin page'
    });
}

// user created

module.exports.create =(req,res)=>{
  
    if(req.body.password != req.body.confirm_password){
        console.log('Different passwords');
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, (err,user) =>{
        if(err){
            console.log("Error in finding user for signup");
            return;
        }
        if(!user){
            console.log(`New user Added ${req.body}`);
            User.create(req.body,(err, user)=>{
                if(err){
                    console.log('We got error while creating user for siginig up',err);
                    return;
                }
                return res.redirect('/users/sign-in');
            })
        }else{
            console.log(`Already some user with this name ${req.body}`);
            return res.redirect('back');
        }
    });
};

// user signIn

module.exports.createSession = (req,res)=>{
    return res.redirect('/');

}

// // sign out

module.exports.sessionDelete=(req,res)=>{

}
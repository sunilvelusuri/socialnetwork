const passport =require('passport');
const LocalStratergy=require('passport-local').Strategy;
const User=require('../models/user');

// authentication using passport
passport.use(new LocalStratergy({
        usernameField:'email'
    },
    (email,password,done)=>{
        User.findOne({email: email}, (err,user)=>{
            if(err){
                console.log('Error while finding the user');
                return done(err);
            }
            if(!user || user.password != password){
                console.log('Invalid password');
                return done(null,false);
            }
            return done(null,user);
        });
    }
));

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        if(err){
            console.log('error in finding user');
            return done(err);
        }
        return done(null,user)
    });
});

module.exports =passport;


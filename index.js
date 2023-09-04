const express=require('express');
const app=express();
const port=6000;



app.listen(port,(err)=>{
    try{
        console.log(`Server is running on port: ${port}`);
    }catch(err){
        console.log(`Error while running the server ${err}`);
    }
});
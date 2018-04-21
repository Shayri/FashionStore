/*
Configuration for Express
*/
//Dependencies
const express =require('express');
const app=express();
const home=require('./routes/home.route');
app.use('/',home);



// app.get('/',(req,res)=>{
//     res.status(200).send('Hello World');
// });
module.exports=app;

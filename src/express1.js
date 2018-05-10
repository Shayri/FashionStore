/*
Configuration for Express
*/
//Dependencies
const express =require('express');

//Creating Express application
const app=express();

//importing Routes
const home=require('./routes/home.route');
const product=require('./routes/product.route');

//Middle ware for home route
app.use('/',home);
app.use('/api/products',product);



// app.get('/',(req,res)=>{
//     res.status(200).send('Hello World');
// });
module.exports=app;

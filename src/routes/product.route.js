/*
*Routing for products
*/
//Dependencies
const express=require("express");
const router=express.Router();

/*
*Routes
*/

//Create a product
router.post('/',(req,res) =>{
    res.status(200).json({success: 'Product created'});
})

//Read all the products
router.get('/',(req,res)=>{
    res.status(200).json({data: 'Product'});
});

//Read a single product
router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.status(200).json({data: 'single product'});
});

//Update a product
router.patch('/:id',(req,res)=>{
    console.log(req.params.id);
    res.status(200).json({success:'Product Updated'});
});

//Delete a product
router.delete('/:id',(req,res)=>{
    console.log(req.params.id);
    res.status(204).json({success: 'Product'});
});

//Export themodule
module.exports=router;



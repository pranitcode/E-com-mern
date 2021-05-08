import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc  Fetch all products
//@route  GET/api/products
//@access  Fetch all products (public)
router.get("/",asyncHandler(async (req, res) => {
    const product =await Product.find({});
    res.json(product);
}))



//..........................................................................................
//@desc  Fetch single product
//route  GET/api/products/:id
//@access  Fetch all products (public)
router.get("/:id",asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product);
    }else{
        res.status(404)
        throw new Error("product not found")
    }
    
}))
//...........................................................................
export default router;

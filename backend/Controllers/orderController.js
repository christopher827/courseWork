const express = require("express");
const router = express.Router();
const orderModel=require("../models/order")

//Saves a new order to the order collection
router.post("/createNewOrder",async(req,res)=>{
    try {
        const {name,phoneNumber}=req.body;
const order={
    name:name,
    phoneNumber:phoneNumber,
}
const newOrder=await orderModel.create(order);
res.json({ message: 'Order created successfully', newOrder });

    } catch (error) {
        res.status(400).json({error:error.message})

    }
})

router.get("/getAllOrders",async(req,res)=>{
    try{
    const orders=await orderModel.find({})
    res.status(200).json({
        success: true,
        orders,
      });
          }      catch (error) {
        res.status(400).json({error:error.message})
    }
})
module.exports = router;
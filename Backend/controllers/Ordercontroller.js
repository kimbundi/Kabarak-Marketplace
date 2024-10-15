import orderModel from "../models/Ordermodel.js";
import userModel  from "../models/Usermodel.js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)



//placing user order from frontend
const placeOrder = async(req,res) =>{
    const frontend_url = "https://food-del-frontend-o1gn.onrender.com";

 try {
    const newOrder = new orderModel({
  userId:req.body.userId,
  items:req.body.items,
  amount:req.body.amount,
  address:req.body.address


    })
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

    const line_items = req.body.items.map((items)=>({
     price_data:{
        currency:"kes",
        product_data:{
            name:items.name
        },
        unit_amount:items.price * 136


     },
     quantity:items.quantity
    }))

    line_items.push({
        price_data:{
            currency:"kes",
            product_data:{
                name:"Delivery charges"
            },
            unit_amount:2*136
        },
        quantity:1
    })

    const session = await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:"payment",
        success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,


    })
    res.json({success:true,session_url:session.url})

    
 } catch (error) {
    
    console.error("error placing order",error);
    res.json({success:false,message:error.message || "an unexpected error occured" });
 }

}



const verifyOrder = async(req,res) =>{
const {orderId,success} = req.body;
try {
    if(success=="true") {
        await orderModel.findByIdAndUpdate(orderId,{payment:true});
        res.json({success:true,message:"paid"})
    }
    else{
        await orderModel.findByIdAndDelete(orderId);
        res.json({success:false,message:"not paid"})
    }
} catch (error) {
    console.log(error);
    res.json({success:false,message:"error"})


}



}

//USER ORDERS FOR FRONTEND

const userOrders = async(req,res) =>{

    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
        
    }
}

//listing orders for admin panel
const listOrders = async(req,res) =>{
    try {
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})

    }

}

//api for updating order status
const updateStatus = async(req,res) =>{
try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
    res.json({success:true,message:"status updated"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"error"})
}
}

export {placeOrder,verifyOrder,userOrders,listOrders,updateStatus}

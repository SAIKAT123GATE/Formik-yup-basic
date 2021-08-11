const express=require("express");
const asyncHandler=require("express-async-handler");
const User=require("../Database/Userschema");
const mongoose=require("mongoose");


const jwt = require( "jsonwebtoken");
 const generatetoken=(id)=>{
    var token=jwt.sign({id},"82a645babc5cd41c9a2cb4d0d3ba17ad",{
        expiresIn:"10s"
    });
    return token;
}

const signup=asyncHandler(async(req,res)=>{
    const{name,email,password}=req.body;
    console.log(name,email,password);
    var exist=await User.findOne({email:email});
    if(exist){
        
         res.status(401).json({
            status:"User Already Exists"
        })
        
    }
    else{
        var user= await User.create({
            email:email,
            name:name,
            password:password
        });
        //console.log(user);
        if(user){
            res.status(201).json({
                id: user.id,
                name: user.name,
                email: user.email,
                token: generatetoken(user.id)
              });
        }
        else{
            throw new Error("invalid user data");
        }
    }
    //console.log("Hitting here");
})


//login

const login=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
})

module.exports={
    signup:signup
}
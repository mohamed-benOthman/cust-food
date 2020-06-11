const User=require('../models/User')
const bcrypt = require('bcrypt');
const crypto = require ('crypto');
const jwt=require('jsonwebtoken');
require('dotenv').config()

const nodemailer =require ('nodemailer');

const sendgridTransport = require ('nodemailer-sendgrid-transport')
const transporter= nodemailer.createTransport(sendgridTransport({
   auth:{
      api_key:'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'

   }
}))


exports.addUser = async  (req, res) => {
   const user=new User(
      req.body
   );
    user2= await User.findOne({email:req.body.email} )
    user3= await User.findOne({userName:req.body.userName} )
   if (user2){
   res.status(400).json({message: "Email already exists"})}
 
    if (user3){
      res.status(400).json({message: "UserName already exists"})}
   else {
   let salt=await bcrypt.genSalt(10);
   user.password=await bcrypt.hash(user.password,salt);
   user.confirmed=false;
   try{
   
   const savedUser= await user.save()
   res.status(201).json("success")
   }
   catch(err){
      res.status(400).json({message:err})
   }
}
  };
  exports.getUser = async (req, res, next) => {
      const email=req.body.email;
      const password = req.body.password;
      try{
      const userFound= await User.findOne({email:email})
         if (!userFound){
            res.status(404).json({message:'Email not Found'})
         }
         else {
            
        const  match = await bcrypt.compare(password, userFound.password)
        if (match){
           const token=jwt.sign({
              email: userFound.email},'e21c07a7cade11b0977de2a384bc414c74a439ee2f3235019141de9acb68f01d514abbbb756ca4d46d8acf6efdb2a635e80d5dc9195b5ebd350799281ea22610',{ expiresIn: '24h'})
           res.status(200).json({token:token, id:userFound._id})   
        }
        else 
        res.status(404).json({message:'Password Incorrect'})
         }
      
      }
      catch(err){
         res.json(err)
      }
    };
    exports.userReset=  (req,res,next)=>{
       crypto.randomBytes(32, async (err, buffer)=>{
          if (err) {
             console.log(err)
          }
          else{ 
           token=buffer.toString('hex');
           try{
              user= await User.findOne({email:req.body.email})
          if (!user){
             res.status(404).json({message:'Email Not Found'})
          }
          else {
             user.resetToken =token;
             user.resetTokenExpiration = Date.now() +3600000

             try{
                  await user.save();
                  await  transporter.sendMail({
                     to : req.body.email,
                     from:'aminebenothman1999@gmail.com',
                     subject :'Reset Password',
                     html: '<p>Click on this to reset your password<a href="http://'+req.headers.host+'/resetPassword/'+token+'"> link </a> which is valid for 1 hour</p>'      
                  })
                  res.status(200).json('success')
             }
             catch(err){
               res.status(400).json(err)
             }
          }}
          catch(err){
             console.log(err)
          }
         }
       })
    }
    exports.confirmToken=  (req,res,next)=>{
      crypto.randomBytes(32, async (err, buffer)=>{
         if (err) {
            console.log(err)
         }
         else{ 
          token=buffer.toString('hex');
          try{
             user= await User.findOne({email:req.body.email})
         if (!user){
            res.status(404).json({message:'Email Not Found'})
         }
         else {
            user.confirmToken =token;
            

            try{
                 await user.save();
                 await  transporter.sendMail({
                    to : req.body.email,
                    from:'aminebenothman1999@gmail.com',
                    subject :'Confirm Account',
                    html: '<p>Click on this to reset your password<a href="http://'+req.headers.host+'/confirmUser/'+token+'"> link </a> which is valid for 1 hour</p>'      
                 })
                 res.status(200).json('success')
            }
            catch(err){
              res.status(400).json(err)
            }
         }}
         catch(err){
            console.log(err)
         }
        }
      })
   }
    exports.checkToken=async (req,res)=>{
       try{
         const userFound= await User.findOne({resetToken:req.body.token})
            if(!userFound){
               res.status(404).json({message:"User not Found"})
            }
            else {
              
                  res.status(200).json({message:"success"})
               }
              
            
       }
       catch(err){
          res.status(400).json(err)
       }
    
       
   },
   exports.checkConfirmToken=async (req,res)=>{
      try{
        const userFound= await User.findOne({confirmToken:req.body.token})
           if(!userFound){
              res.status(404).json({message:"User not Found"})
           }
           else {
             
                 res.status(200).json({message:"success"})
              }
             
           
      }
      catch(err){
         res.status(400).json(err)
      }
   
      
  },
   exports.resetPassword=async (req,res)=>{
      try{
        const userFound= await User.findOne({resetToken:req.body.token})
           if(!userFound){
              res.status(404).json({message:"User not found"})
           }
           else {
              
                 let salt=await bcrypt.genSalt(10);
                 const newPassword=await bcrypt.hash(req.body.password,salt);
                 userFound.overwrite({email:userFound.email,password:newPassword,userName:userFound.userName,wishList:userFound.wishList, lastReasearch:userFound.lastReasearch});
                 await userFound.save()
                 res.status(200).json({message:"success"})
              
           }
      }
      catch(err){
         res.status(400).json(err)
      }
   
      
  },
  exports.confirmUser=async (req,res)=>{
   try{
     const userFound= await User.findOne({confirmToken:req.body.token})
        if(!userFound){
           res.status(404).json({message:"User not found"})
        }
        else {
           
             
              userFound.overwrite({email:userFound.email,password:userFound.password,userName:userFound.userName,wishList:userFound.wishList, lastReasearch:userFound.lastReasearch, confirmed:true});
              await userFound.save()
              res.status(200).json({message:"success"})
           
        }
   }
   catch(err){
      res.status(400).json(err)
   }

   
},
   exports.getCordonne=async(req,res)=>{
      try{
         const userFound= await User.findById(req.params.userId).populate("wishList")
         if (!userFound)
            res.status(404).json({message:'not Found'});
         const result={
            userName:userFound.userName,
            email:userFound.email,
            wishList:userFound.wishList,
            lastReasearch:userFound.lastReasearch

         }
         res.status(200).json(result);
      }
      catch(err){
         res.status(400).json({'message':err})
      }
   }
   exports.updateWishList=async (req,res)=>{
      try{
         const userFound= await User.findById(req.params.userId).populate("wishList")
         if (!userFound)
            res.status(404).json({message:'not Found'});
            let wishList=userFound.wishList;
            wishList.push(req.body.recipe);
            
             userFound.overwrite({email:userFound.email,password:userFound.password,userName:userFound.userName,wishList:wishList});
            await userFound.save()
         
        res.status(200).json({message:"updated"});
      }
      catch(err){
         res.status(400).json({'message':err})
      }
   }
   exports.removeFromWishList=async (req,res)=>{
      try{
         const userFound= await User.findById(req.params.userId).populate("wishList")
         if (!userFound)
            res.status(404).json({message:'not Found'});
            let wishList=userFound.wishList;
            for (let i in wishList){
               
               if (wishList[i]._id==req.body.recipe){
                  
                  wishList.splice(i,1);
                  userFound.overwrite({email:userFound.email,password:userFound.password,userName:userFound.userName,wishList:wishList});
                   await userFound.save()
                   res.status(200).json({message:"deleted"});
               } 
            }
            
            
            
         
        res.status(404).json({message:"not Found"});
      }
      catch(err){
         res.status(400).json({'message':err})
      }
   }
   exports.addSearchList= async (req,res)=>{
      try{
         const userFound= await User.findById(req.params.userId)
         if (!userFound)
            res.status(404).json({message:'not Found'});
            let lastReasearch=userFound.lastReasearch;
            lastReasearch.push(req.body.ingredients);
            
             userFound.overwrite({email:userFound.email,password:userFound.password,userName:userFound.userName,wishList:userFound.wishList, lastReasearch:lastReasearch});
            await userFound.save()
         
        res.status(200).json({message:"updated"});
      }
      catch(err){
         res.status(400).json({'message':err})
      }
   }


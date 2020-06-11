const jwt=require('jsonwebtoken')
require('dotenv').config()
module.exports =(req,res,next)=>{
    const authHeader = req.get('Authorization');
    if (!authHeader){
        res.status(401).json({message:'not authenticated'})
    }
    const token=req.get('Authorization').split(' ')[1];
    let decodedToken;

    try{
        decodedToken=jwt.verify(token, 'e21c07a7cade11b0977de2a384bc414c74a439ee2f3235019141de9acb68f01d514abbbb756ca4d46d8acf6efdb2a635e80d5dc9195b5ebd350799281ea22610');

    }
    catch(err){
       
        res.status(500).json({message:err})
    }
    if (!decodedToken){
        res.status(401).json({message:'not Authenticated'})    
    }
    next();
}
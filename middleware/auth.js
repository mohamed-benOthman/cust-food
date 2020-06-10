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
        decodedToken=jwt.verify(token, process.env.TOKEN_SECRET);

    }
    catch(err){
       
        res.status(500).json({message:err})
    }
    if (!decodedToken){
        res.status(401).json({message:'not Authenticated'})    
    }
    next();
}
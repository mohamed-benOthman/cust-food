const Recipe=require('../models/Recipe')
const axios = require('axios');


url="https://edamam-recipe-search.p.rapidapi.com/search"
exports.searchRecipe= async (request,response,next)=>{
 
    var unirest = require("unirest");

    var req = unirest("GET", "https://edamam-recipe-search.p.rapidapi.com/search");
    
    req.query({
        "q": request.body.ingredients
    });
    
    req.headers({
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
        "x-rapidapi-key": "84ac92b758msh267364dbfb9c321p129105jsnd00ad7d196ba",
        "useQueryString": true
    });
    
    
    await req.end(async  (res)=> {
        if (res.error) response.json(res.error);
       
     
        try{
            for(let i of res.body.hits){
            const recipe=new Recipe(i.recipe)
            try{
            const savedRecipe= await recipe.save()
            }
            catch(err){
                response.status(201).json(res.body.hits)      }
            }
            response.status(201).json(res.body.hits)
        }
        catch(err){
            response.status(400).json(err)
        }
       
      
    });
   
}
exports.getRecipebyName= async (req,res)=>{
    try{
     const recipeFound= await Recipe.findOne({label:req.body.label})
     if (!recipeFound)
     res.status(404).json({message : 'not Found'})
     res.status(200).json(recipeFound)

    }
    catch(err){
        res.status(400).json({message:err})
    }
}
 
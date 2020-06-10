const express =require('express');
const auth=require('../middleware/auth')

const recipeController = require ('../controller/recipe')
const router=express.Router();
router.post('', auth, recipeController.searchRecipe)
router.post('/getByLabel',auth,recipeController.getRecipebyName)
module.exports=router
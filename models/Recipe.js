const mongoose =require ('mongoose')


const RecipeSchema=mongoose.Schema({
    label: {type: String,required: true, unique: true},
    image: {type: String},
    
    url:{type:String, required: true, unique: true},
    calories: {type: String},
    eater:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }],
    ingredientLines:{type:[String], required: true}

})


module.exports=mongoose.model('Recipes', RecipeSchema)
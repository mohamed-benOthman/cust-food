const mongoose =require ('mongoose')


const UserSchema=mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    resetToken:String,
    resetTokenExpiration:Date,
    confirmToken:String,
    lastReasearch:[String],
    wishList:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Recipes'
    }],
    confirmed:Boolean

})

module.exports=mongoose.model('Users', UserSchema)
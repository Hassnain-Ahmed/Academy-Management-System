const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        require: [true, "userSchema: Please Add your name"]
    },
    username:{
        type:String,
        unique:true,
        trim: true,
        minlength:3,
        require: [true, "userSchema: Please Add your Username"]
    },
    password:{
        type:String,
        trim: true,
        minlength:3,
        require: [true, "userSchema: Please Add your Password"]
    },
    phone:{
        type:String,
        trim: true,
        minlength:3,
        require: [true, "userSchema: Please Add your phone"]
    },
    email:{
        type:String,
        trim: true,
        minlength:3,
        require: [true, "userSchema: Please Add your email address"],
        unique: [true, "userSchema: Email Already exists"]
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }
},
    {
        timestamps:true
    }
)

module.exports = mongoose.model("userLogin",userSchema)
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:[true, 'Name is required'],
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:[true, 'email is required'],
        lowercase:true,
        trim:true,
        unique: true,

    },
    password:{
        type:'String',
        required:'true',
    },
    phone:{
        type:Number,
        required:[true, 'phone number is required'],
        unique:true,
    }
}, {timestamps: true});

const User = model('User', userSchema);

export default User;
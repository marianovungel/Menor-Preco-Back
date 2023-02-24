const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    cpf:{
        type:String,
        default: "",
    },
    email:{
        type:String,
        unique:false,
    },
    password:{
        type:String,
    },
    profilePic:{
        type:String,
        default: "https://cdn-icons-png.flaticon.com/512/74/74472.png"
    },
    whatsapp: {
        type:String,
        default: "",
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
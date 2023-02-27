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
    type:{
        type:String,
        default: "use"
    },
    endereco:{
        type:String,
        default: ""
    },
    profilePic:{
        type:String,
        default: "uploads/user.png"
    },
    whatsapp: {
        type:String,
        default: "",
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
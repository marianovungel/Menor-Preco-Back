const mongoose = require('mongoose');

const CoopSchema = new mongoose.Schema({
    nome:{
        type:String,
        default: ""
    },
    cnpj:{
        type:String,
        default: ""
    },
    zap:{
        type:String,
        default: ""
    },
    email:{
        type:String,
        default: ""
    },
    senha:{
        type:String,
        default: ""
    },
    sobre:{
        type:String,
        default: ""
    },
    horario:{
        type:String,
        default: ""
    },
    profilePic:{
        type:String,
        default: "https://cdn-icons-png.flaticon.com/512/74/74472.png"
    },
    
},
    {timestamps: true}
);

module.exports = mongoose.model("Coop", CoopSchema);
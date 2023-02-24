const mongoose = require('mongoose')

require('dotenv').config()

mongoose.set("strictQuery", true)

async function main(){
    await mongoose.connect(`${process.env.URLDB}`);
    console.log("Success Conected!");
}

main().catch((err)=>console.log(err.message))

module.exports = main;

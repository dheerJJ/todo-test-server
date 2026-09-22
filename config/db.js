const mongoose = require("mongoose");

async function connectDb() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/todo")
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }    
}

module.exports = connectDb
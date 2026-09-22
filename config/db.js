const mongoose = require("mongoose");

async function connectDb() {
    try {
        await mongoose.connect("mongodb+srv://dheerajjkumawat_db_user:dheerajj12334@backend-practice.ddhtdel.mongodb.net/todos")
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }    
}

module.exports = connectDb
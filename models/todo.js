const { Schema, default: mongoose } = require("mongoose");

const todoSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        trim: true
    }
},{timestamps:true})

const Todo =   mongoose.model("Todo",todoSchema)

module.exports = Todo;
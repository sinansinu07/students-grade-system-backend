const mongoose = require('mongoose')
const { Schema, model } = mongoose

const studentSchema = new Schema({
    name : String,
    subject : {
        type : Schema.Types.ObjectId,
        ref : 'Subject'
    },
    grade : Number,
    remarks : String
}, {timestamps : true})

const Student = model('Student', studentSchema)
module.exports = Student
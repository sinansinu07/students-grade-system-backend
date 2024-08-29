const mongoose = require('mongoose')

const configureDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/students-grade-system')
        console.log('Connected to MongoDB')
    } catch(err) {
        console.error('Error Connecting to MongoDB', err)
    }
}

module.exports =  configureDB
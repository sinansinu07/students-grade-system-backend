const mongoose = require('mongoose')

const configureDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://customthreads2024:0vobBfQHr8MU9upB@cluster0.38hyuf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Connected to MongoDB')
    } catch(err) {
        console.error('Error Connecting to MongoDB', err)
    }
}

module.exports =  configureDB
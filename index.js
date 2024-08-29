const express = require('express')
const cors = require('cors')
const { checkSchema } = require('express-validator')

const port = 5001
const app = express()

const configureDB = require('./config/db')

const studentCltr = require('./app/controllers/student-controller')
const subjectCltr = require('./app/controllers/subject-controller')

const studentValidationSchema = require('./app/validations/student-validation')
const subjectValidationSchema = require('./app/validations/subject-validation')



configureDB()

app.use(express.json())
app.use(cors())

// Student 

app.post('/api/students', checkSchema(studentValidationSchema), studentCltr.create)
app.get('/api/students', studentCltr.list)
app.delete('/api/students/:id', studentCltr.delete)

// Subject

app.post('/api/subjects', checkSchema(subjectValidationSchema), subjectCltr.create)
app.get('/api/subjects', subjectCltr.list)
app.delete('/api/subjects/:id', subjectCltr.delete)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
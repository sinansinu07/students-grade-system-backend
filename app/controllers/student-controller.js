const Student = require('../models/student-model')
const {validationResult} = require('express-validator')

const studentCltr = {}

studentCltr.create = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() })
    } else {
        const {body} = req
        const student = new Student(body)
        try {
            // console.log(student.grade)
            if(student.grade >= 75) {
                student.remarks = "PASS"
            } else {
                student.remarks = "FAIL"
            }
            await student.save()
            const newStudent = await Student.findById(student._id).populate('subject', ['name'])
            res.status(201).json(newStudent)
        } catch(err) {
            res.status(500).json({ message: err.message })
        }
    }
}

studentCltr.list = async (req, res) => {
    try {
        const search = req.query.search || ''
        const sortBy = req.query.sortBy || 'name'
        const order = req.query.order || 1 
        const searchQuery = { name : { $regex : search, $options : 'i' } }
        const sortQuery = {}
        sortQuery[sortBy] = order === 'asc' ? 1 : -1
        const students = await Student.find(searchQuery)
                                        .sort(sortQuery)
                                        .populate('subject', ['name'])
        res.status(201).json(students)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

studentCltr.delete = async (req, res) => {
    const studentId = req.params.id
    try {
        const student = await Student.findByIdAndDelete(studentId)
        res.status(201).json(student)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = studentCltr
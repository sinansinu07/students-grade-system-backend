const Subject = require('../models/subject-model')
const {validationResult} = require('express-validator')

const subjectCltr = {}

subjectCltr.create = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    } else {
        const { body } = req
        const subject = new Subject(body)
        try {
            await subject.save()
            res.status(201).json(subject)
        } catch(err) {
            res.status(500).json({ message: err.message })
        }
    }
}

subjectCltr.list = async (req, res) => {
    try {
        const subjects = await Subject.find().sort({name: -1})
        res.status(201).json(subjects)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

subjectCltr.delete = async (req, res) => {
    const subjectId = req.params.id
    try {
        const subject = await Subject.findByIdAndDelete(subjectId)
        res.status(201).json(subject)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = subjectCltr
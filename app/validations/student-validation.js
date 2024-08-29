const studentValidationSchema = {
    name : {
        notEmpty : {
            errorMessage : "Student Name is required"
        }
    },
    subject : {
        notEmpty : {
            errorMessage : "Subject is required"
        }
    },
    grade : {
        notEmpty : {
            errorMessage : "Subject Garde is required"
        }
    }
}

module.exports = studentValidationSchema
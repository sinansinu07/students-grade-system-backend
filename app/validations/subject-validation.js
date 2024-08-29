const Subject = require("../models/subject-model")

const subjectValidationSchema = {
    name : {
        notEmpty : {
            errorMessage : "Subject is required"
        },
        custom:{
            options : async function (value){
                const subject = await Subject.findOne({name : value})
                if(!subject){
                    return true
                }else{
                    throw new Error('Subject already exist')
                }
            }
        }
    },
}

module.exports = subjectValidationSchema
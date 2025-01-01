// this is a mongodb schema for the student model
const mongoose = require(mongoose);
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    roll :{
        type : Number,
        required:true
    },
    name :{
        type:string ,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    email:{
        type:email,
        required:true
    },
    adress:{
        type:string,
        required:true
    },
    contactNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v); // Regex to check if the number is exactly 10 digits
            },
            message: (props) => `${props.value} is not a valid 10-digit contact number!`,
        },
    },
    age:{
        type:Number,
        required:true
    },
    result:{
        type:string
    },
    enrollid:{
        type:string,
        required:true
    }
})

const Student = mongoose.model('Student',studentSchema);
module.exports(Student);
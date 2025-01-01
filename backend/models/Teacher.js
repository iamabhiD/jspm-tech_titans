const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    tid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    depid:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    contact: {
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
    }
})


const Teacher = mongoose.model('Teacher',TeacherSchema);
module.exports(Teacher);
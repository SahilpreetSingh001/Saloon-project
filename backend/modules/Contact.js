import mongoose from "mongoose";

const conatctSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
});

const Contact = mongoose.model('Conatct', conatctSchema);
export default Contact;
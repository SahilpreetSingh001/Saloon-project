import mongoose from "mongoose";

const DetailsSchema = new mongoose.Schema({
    // name: { type: String, required: true },
    // contactNo: { type: Number, required: true },
    // emailID: { type: String, required: true },
    // noOfBookings: { type: Number, required: true },
    // address: { type: String, required: true },
    // date: { type: Date, required: true }, 
    name : String,
    sername: String,
    istrue: Boolean,
});

export const Details = mongoose.model("Details", DetailsSchema);
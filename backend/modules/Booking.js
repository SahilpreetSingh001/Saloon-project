import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    enum: ['city1', 'city2', 'other'], // restrict to valid location options
  },
  contact: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v); // validation for 10-digit contact number
      },
      message: props => `${props.value} is not a valid contact number!`
    }
  },
  mail: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // regex validation for email format
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  noOfPersons: {
    type: Number,
    required: true,
    min: 1, // minimum of 1 person
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;

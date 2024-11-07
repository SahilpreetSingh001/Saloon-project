import express from "express";
import cors from "cors";
// No need for bodyParser, use express.json() directly
import Booking from './modules/Booking.js';
import Contact from "./modules/contact.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Using express's built-in JSON parsing middleware

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  try {
    const { location, contact, mail, noOfPersons, address, date } = req.body;
    console.log("Received data : ", { location, contact, mail, noOfPersons, address, date });

    // Try to create a new booking entry
    try {
      const createBooking = await Booking.create({ location, contact, mail, noOfPersons, address, date });
      console.log("Booking created:", createBooking);
      
      // Find the created booking and exclude the contact field
      const bookCreated = await Booking.findById(createBooking._id).select("-contact");

      if (!bookCreated) {
        return res.status(400).json({ message: "Some error occurred" });
      }

      res.status(201).json({
        message: "Booking Detail created",
        data: bookCreated,
        success: true,
      });
    } catch (error) {
      console.error("Error during booking creation:", error.message);
      res.status(500).json({
        message: "Error creating booking",
        error: error.message,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});


app.post("/form", async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;
    console.log("Received data:", { firstName, lastName, email, subject, message });

    // Try to create a new contact entry
    try {
      const createContact = await Contact.create({ firstName, lastName, email, subject, message });
      console.log("Contact created:", createContact);

      // Find the created contact and exclude the 'message' field
      const contactCreated = await Contact.findById(createContact._id).select("-message");

      if (!contactCreated) {
        return res.status(400).json({ message: "Some error occurred while saving the contact form" });
      }

      // Send a success response with the created contact data
      res.status(201).json({
        message: "Contact form submitted successfully",
        data: contactCreated,
        success: true,
      });
    } catch (error) {
      console.error("Error during contact creation:", error.message);
      res.status(500).json({
        message: "Error creating contact form",
        error: error.message,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;

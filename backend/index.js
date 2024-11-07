import { connect } from "mongoose";
import app from "./app.js";
import { connectDb } from "./db/index.js";

connectDb()
    .then(() => {
        app.listen(5000, () => console.log("Server started at port 5000"));
    })
    .catch((err) => {
        console.log("Failed to connect to the database:", err);
    });

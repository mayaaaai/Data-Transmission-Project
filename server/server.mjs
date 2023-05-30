import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

// Constants
const PORT = process.env.PORT || 5050; // Port to run the server on
const app = express(); // Express app

// Middleware
app.use(cors()); // CORS
app.use(express.json()); // Body parser

// Routes
app.use("/record", records); // Record routes

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} 🚀`);
});

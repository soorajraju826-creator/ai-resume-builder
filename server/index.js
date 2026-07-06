const express = require("express");
const connectDB = require("./config/db");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api", resumeRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to AI Resume Builder Backend");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
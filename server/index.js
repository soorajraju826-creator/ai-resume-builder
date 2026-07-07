require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const resumeRoutes = require("./routes/resumeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api", resumeRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to AI Resume Builder Backend");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
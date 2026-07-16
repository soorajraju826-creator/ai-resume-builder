require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const resumeRoutes = require("./routes/resumeRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

connectDB();

// ================= Middleware =================

app.use(cors());
app.use(express.json());

// ================= Routes =================

app.use("/api", authRoutes);
app.use("/api", resumeRoutes);
app.use("/api", aiRoutes);

// ================= Home Route =================

app.get("/", (req, res) => {
    res.send("Welcome to AI Resume Builder Backend");
});

// ================= Start Server =================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
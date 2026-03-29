const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ✅ IMPORTANT ROOT ROUTE */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* ✅ TEST API ROUTE */
app.get("/api/users", (req, res) => {
  res.json([{ name: "Test User" }]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
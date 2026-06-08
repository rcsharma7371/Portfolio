const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config({ override: false });
const connectDB = require("./src/config/db");
const chatRoute = require("./src/routes/chat.route");

connectDB();

const app = express();

app.use(cors());
app.use(cookieParser());

app.use(express.json());

app.use("/api/chat", chatRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

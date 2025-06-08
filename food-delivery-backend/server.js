const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/restaurants", require("./routes/restaurant"));
// app.use("/api/orders", require("./routes/order"));

app.listen(process.env.PORT, () => console.log("Server running on port 8000"));

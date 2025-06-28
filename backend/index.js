const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables
const cors = require("cors");
const mongoose = require("mongoose"); // Correct import for mongoose

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const PORT = process.env.PORT || 5001; // Use a different port

app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong", success: false });
});

app.use('/api/user/', require('./routes/userRoutes'));
app.use('/api/admin/', require('./routes/adminRoutes'));
app.use('/api/doctor', require('./routes/doctorRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Environment variables
process.env.MONGO_URI = "mongodb+srv://queenamulyagadi:Amulya%4057@cluster0.mongodb.net/Docspot";
process.env.PORT = "5001";



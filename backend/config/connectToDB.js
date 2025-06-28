const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const mongoose = process.env.MONGO_URI; // Load MongoDB URI from environment variables
    if (!uri) {
      throw new Error("mongodb+srv://queenamulyagadi:Amulya%4057@cluster0.aee4aew.mongodb.net/Docspot");
    }
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    throw new Error(`Could not connect to MongoDB: ${err.message}`);
  }
};

module.exports = connectToDB;

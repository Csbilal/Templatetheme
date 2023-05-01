const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://mbcs7550:portal@cluster0.7bjri7x.mongodb.net/portaldatabase"
    );
    console.log(`MongoDb connected: ${conn.connection.host}`);
    return conn;
  } catch (e) {
    console.error(e);
  }
};

connectDB();

module.exports = connectDB;

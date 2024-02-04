import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongodb connected at ${connect.connection.host} `);
  } catch (error) {
    console.log("Connection to db failed");
    process.exit(1);
  }
};

export default connectDB;

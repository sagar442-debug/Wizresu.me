import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strict", true);

  if (initialized) {
    console.log("MongoDb already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "wizresume",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected");
    initialized = true;
  } catch (error) {
    console.log("Failed to connect to mongo db");
  }
};

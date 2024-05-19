import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records.js";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Replace this with your MongoDB cluster connection string.
const mongoURI = "";

try {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(mongoURI);
  console.log("Connected.");
} catch (err) {
  console.error(`Unable to connect to MongoDB:\n${err}`);
}

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});

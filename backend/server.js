import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();

//allowing to accept json data in req.body
//Middleware
app.use(express.json());

//Routes
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDb();
  console.log("Server, started at http://localhost:5000");
});

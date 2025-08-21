import express from "express";
import dotenv from "dotenv";
import  {connectDb} from "./config/db.js";

dotenv.config();
const app = express();

app.get("/products",(req,res)=>{
    res.send("server is ready")
})
app.listen(5000, ()=>{
    connectDb();
    console.log("Server, started at http://localhost:5000")
});
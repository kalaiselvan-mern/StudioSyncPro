import express from "express";
import cors from "cors";


// Instalaztion 
const app =express();
const PORT = 5000;
app.use(cors());
app.use(express.json())



app.get("/api/data",(req , res)=>{  res.send({Name:"Kalai" , Age: 21 , skill: "React Devloper"})})  

// Server Run 
app.listen(PORT,()=>{
    console.log("Server Is Running in Without Error 👍")})
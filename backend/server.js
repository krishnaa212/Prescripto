import express from "express"
import cors from "cors"
import { configDotenv } from "dotenv"


// app config

const app = express();
const port = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors())

//api endpoint

app.get("/",(req,res)=>{
  res.send("api working ok")
})

app.listen(port,() => console.log("Server Started",port))


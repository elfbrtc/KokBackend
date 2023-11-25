import mongoose from "mongoose";
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors'
import router from "./router"


const app = express();
app.use(cors({
  credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app)

server.listen(8080, () =>{
  console.log("server fire")
})
;
const MONGO_URL = 'mongodb+srv://elf:elf123@cluster0.lz40bun.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise=Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', ( error: Error)=>console.log(error))


app.use('./', router());
import env  from "./util/validateEnv"
import mongoose from "mongoose";

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors'


const app = express();

app.use(cors({
  credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app)


const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
      console.log("mongoose connected");
      server.listen(port, () => {
        console.log("Server is Fire at http://localhost:" + port);
      });
    })
    .catch(console.error)


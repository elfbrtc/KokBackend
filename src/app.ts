import "dotenv/config";
import express, { NextFunction, Request, Response } from 'express';
import Notemodel from "./models/note";
const app = express();

app.get('/', async (req, res, next) => {
  try{
    throw Error("errorrrssdd");
    const notes = await Notemodel.find().exec();
    res.status(200).json(notes)
  }
  catch(error){
    next(error);
  }  
  });

  app.use((req, res , next) => {
    next(Error("Enpoint not found"))
  })

  app.use((error: unknown, req: Request, res: Response, next:NextFunction) => {
    console.error(error);
    let errMsg = "An unknown error occurred"
    if (error instanceof Error)  errMsg = error.message;
    res.status(500).json({error: errMsg});
  });

export default app;

  
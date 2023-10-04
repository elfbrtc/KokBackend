import "dotenv/config";
import express, { Request, Response } from 'express';
import notesRoutes from "./routes/notes"

const app = express();


app.use("/api/notes", notesRoutes);


  app.use((req, res , next) => {
    next(Error("Enpoint not found"))
  })

  app.use((error: unknown, req: Request, res: Response) => {
    console.error(error);
    let errMsg = "An unknown error occurred"
    if (error instanceof Error)  errMsg = error.message;
    res.status(500).json({error: errMsg});
  });

export default app;

  
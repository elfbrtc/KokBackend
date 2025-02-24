import "dotenv/config";
import express, { Request, Response } from "express";
import notesRoutes from "./routes/notes";
import morgan from "morgan";
import createHttpError, {isHttpError} from "http-errors";

const app = express();
const cors = require('cors')
app.use(morgan("dev"));

app.use(express.json());

app.use(cors())

app.use("/api/notes", notesRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Enpoint not found"));
});

app.use((error: unknown, req: Request, res: Response) => {
  console.error(error);
  let errMsg = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)){
    statusCode = error.status;
    errMsg = error.message;
  }
  res.status(statusCode).json({ error: errMsg });
});

export default app;

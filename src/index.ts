
import express, { Request, Response  } from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();
const port = undefined;

const app = express();
// const db = mongoose.connect("mongodb+srv://elf:elf123@cluster0.lz40bun.mongodb.net/");

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
  console.log("elf")
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
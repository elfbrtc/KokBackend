import "dotenv/config";
import express, { Request, Response  } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
  });

export default app;

  
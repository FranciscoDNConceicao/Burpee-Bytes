import express, {Router, Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./router/route";
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;



const corsOptions = {
  origin: "http://localhost:5173", // Allow only this origin
  methods: ['GET', 'POST'], // Allow only GET and POST methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specific headers
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/', router);



app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
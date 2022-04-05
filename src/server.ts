import express from 'express';
import { config } from 'dotenv';

config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})
const app = express();

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT,() => console.log(`🔥 Running in port ${PORT} ${process.env.NODE_ENV}`));
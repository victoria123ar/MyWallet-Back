import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(transactionRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));
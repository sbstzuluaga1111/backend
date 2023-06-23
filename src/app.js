import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
const app = express();

app.set("port", 5000);

// Routes

export default app;

app.use("/api/categorias",categoriaRoutes);
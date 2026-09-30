import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import loanRoutes from "./routes/loanRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ 
    message: "Library API is running!", 
    endpoints: ["/api/loans"] 
  });
});

app.use("/api/loans", loanRoutes);

const port = process.env.PORT || 3000;

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;
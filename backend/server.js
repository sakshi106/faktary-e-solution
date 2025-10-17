// backend/server.js
import express from "express";
import cors from "cors";
import resourceRoutes from "./routes/resourceRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/resources", resourceRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});

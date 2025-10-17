import express from "express";
import multer from "multer";
import db from "../db.js";

const router = express.Router();

// Configure multer (file uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// 👉 Fetch all resources
router.get("/", (req, res) => {
  db.query("SELECT * FROM resources ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// 👉 Add new resource (with image)
router.post("/", upload.single("image"), (req, res) => {
  const { title, description, type } = req.body;
  const image_url = "/uploads/" + req.file.filename;

  const sql = "INSERT INTO resources (title, description, type, image_url) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, description, type, image_url], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "✅ Uploaded Successfully!", id: result.insertId });
  });
});

export default router;

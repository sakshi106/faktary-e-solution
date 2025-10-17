// backend/db.js
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // apna MySQL password yahan daal
  database: "mybrand",
});

db.connect((err) => {
  if (err) console.log("❌ MySQL Connection Failed", err);
  else console.log("✅ MySQL Connected");
});

export default db;

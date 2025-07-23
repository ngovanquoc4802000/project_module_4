import dotenv from "dotenv";
dotenv.config(); 
import express from "express";
import morgan from "morgan";
import "colors"; 
import pool from "./database/connectdatabase.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import routerCategoryApi from "./router/category.js";
import routerDishlist from "./router/dishlist.js";
import routerUser from "./router/user.js";
import routerOrder from "./router/order.js";
const app = express();

const PORT = process.env.APP_PORT || 8000;

app.use(cookieParser()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(morgan("dev")); 


const corsOptions = {
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, 
  optionsSuccessStatus: 204, 
};
app.use(cors(corsOptions)); 

app.use("/category", routerCategoryApi);
app.use("/dishlist", routerDishlist);
app.use("/user", routerUser);
app.use("/order", routerOrder);

app.get("/", (req, res) => {
  res.status(200).send("<h1> Đã thành công Kết nối PostgreSQL</h1>");
});

pool.query("SELECT 1")
  .then(() => {
    console.log(`kết nối database PostgreSQL thành công`.cyan.bold); 

    app.listen(PORT, () => {
      console.log(
        `Server running on port: http://localhost:${PORT}`.magenta.bold
      );
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message.red.bold); 
    console.error("Server not started due to DB error.".red.bold);
  });

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack.red); 
  res.status(500).send('Something broke!');
});

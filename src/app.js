import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import handlebars from "express-handlebars";
import userRouter from "./routes/user.route.js";
import courseRouter from "./routes/course.route.js";
import viewsRouter from "./routes/view.route.js";
import { __dirname } from "./utils.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/ecommerce";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//////////////////////
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
//////////////////////

app.use("/api/user", userRouter);
app.use("/api/course", courseRouter);
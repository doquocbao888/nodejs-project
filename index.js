import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

import homePage from "./routes/homePage.js";
import courses from "./routes/courses.js";
import course from "./routes/course.js";

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Views engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//Routes
app.use("/", homePage);
app.use("/courses", courses);
app.use("/course", course);

mongoose
  .connect(
    "mongodb+srv://doquocbao888:zxczxczxc1@cluster0.7asno6c.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("err ", err);
  });

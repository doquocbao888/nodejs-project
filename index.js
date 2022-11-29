import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";

import homePage from "./routes/homePage.js";
import courses from "./routes/courses.js";
import course from "./routes/course.js";

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
  .connect("mongodb://localhost/admin")
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running");
    });
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("err ", err);
  });

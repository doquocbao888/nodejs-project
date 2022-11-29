import express from "express";
const route = express.Router();
import { getCourses } from "../controllers/courses.js";

route.get("/", getCourses);

export default route;

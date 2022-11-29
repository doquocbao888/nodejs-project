import express from "express";
const route = express.Router();
import { getCourse } from "../controllers/course.js";

route.get("/:slug", getCourse);

export default route;

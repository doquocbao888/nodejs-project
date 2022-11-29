import express from "express";
const route = express.Router();
import { homePage } from "../controllers/homePage.js";

route.get("/", homePage);

export default route;

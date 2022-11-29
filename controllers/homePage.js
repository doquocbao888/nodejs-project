import Courses from "../models/Course.js";

export const homePage = async (req, res) => {
  let courses = await Courses.find();
  courses = courses.map((item) => item.toObject());
  res.render("home", { courses });
};

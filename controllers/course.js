import Courses from "../models/Course.js";

export const getCourse = async (req, res, next) => {
  Courses.findOne({ slug: req.params.slug })
    .then((course) => {
      course = course.toObject();
      res.render("course", { course });
    })
    .catch(next);
};

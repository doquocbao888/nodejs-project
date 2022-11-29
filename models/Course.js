import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    title: String,
    drc: String,
    img: String,
  },
  { timestamps: true }
);

const Courses = mongoose.model("Course", Course);

export default Courses;

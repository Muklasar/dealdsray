const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "employee name is required",
      minLength: [2, "Too Short"],
      maxLength: [32, "Too Long"],
      text: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    mobile_no: {
      type: Number,
      text: true,
    },
    designation: {
      type: String,
      enum: ["HR", "Manager", "Sales"],
      required: ["Gender is required"],
    },
    gender: {
      type: String,
      enum: ["M", "F"],
      required: ["Gender is required"],
    },
    course: {
      type: String,
      enum: ["MCA", "BCA", "BSC"],
    },
    active: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);

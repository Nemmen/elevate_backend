const express = require("express");
const Student = require("../model/student");

const addstudent = async (req, res) => {
  try {
    const stu = await Student.findOne({ admission: req.body.admission });
    if (stu) {
      return res.status(400).send({
        error: "Admission Number Already Exists",
        message: "Alredy Registered",
      });
    }

    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    console.error("Error saving student:", error.message); // Log the error message

    // Check if the error is a validation error
    if (error.name === "ValidationError") {
      return res.status(400).send({
        error: "Validation Error",
        message: error.message,
        details: error.errors,
      });
    }

    // Check if there's an issue with the database connection
    if (error.name === "MongoNetworkError") {
      return res.status(500).send({
        error: "Database Error",
        message: "There was an issue connecting to the database.",
      });
    }

    // Handle any other errors
    res.status(500).send({
      error: "Server Error",
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};

// all student
const allstudent = async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).send(student);
  } catch (error) {
    console.error("Error getting student:", error.message);
    res.status(500).send({
      error: "Server Error",
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};

module.exports = { addstudent, allstudent };

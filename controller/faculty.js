const express = require("express");

const Faculty = require("../model/faculty");

const addfaculty = async (req, res) => {
  try {
    const fac = await Faculty.findOne({ email: req.body.email });
    if (fac) {
      return res.status(400).send({
        error: "Email Already Exists",
        message: "Alredy Registered",
      });
    }

    const faculty = new Faculty(req.body);
    await faculty.save();
    res.status(201).send(faculty);
  } catch (error) {
    console.error("Error saving faculty:", error.message); // Log the error message

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

module.exports = { addfaculty };

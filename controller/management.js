const express = require('express');

const Mangement = require('../model/management');


const addmanagement = async (req, res) => {
	try {

		const man = await Mangement.findOne({ email: req.body.email });
		if(man){
			return res.status(400).send({
				error: "Email Already Exists",
				message: "Alredy Registered",
			  });
		}



	  const mangement = new Mangement(req.body);
	  await mangement.save();
	  res.status(201).send(mangement);
	} catch (error) {
	  console.error("Error saving mangement:", error.message); // Log the error message
  
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


  module.exports = { addmanagement };
const mongoose = require('mongoose');

const managemmentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	designation: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	contact: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Management', managemmentSchema);
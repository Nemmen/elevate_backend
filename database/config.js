const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConnnect = async () => {
	try {
		await mongoose.connect(process.env.MongoDB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Database connected successfully');
	} catch (error) {
		console.log('Database connection failed');
	}
};

module.exports = dbConnnect;
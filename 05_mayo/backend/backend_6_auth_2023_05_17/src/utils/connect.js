const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
	try {
		const db = await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		const {name, host} = db.connection;
		console.log(`Connected to db: ${name} in host ${host}`);
	} catch (error) {
		console.log("Error connecting to DB", error);
	}
};

module.exports = connect;

const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
	try {
		const db = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		const {name, host} = db.connection;
		console.log(`Connected to DB: ${name} in host ${host}`);
	} catch (error) {
		console.log("Error connecting to DB", error);
	}
};

module.exports = connect;

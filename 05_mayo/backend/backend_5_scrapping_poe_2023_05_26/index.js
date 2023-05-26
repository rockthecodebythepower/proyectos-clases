const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use("*", (req, res, next) => {
	return res.json("Route not found");
});

server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

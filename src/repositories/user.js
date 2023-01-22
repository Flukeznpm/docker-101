const userModel = require("../models/user");

module.exports.getUser = async () => {
	return [{
		firstname: "Nattapong",
		lastname: "Meunsittirod"
	}]
};
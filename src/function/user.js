const userRepo = require("../repositories/user");

module.exports.getUser = async () => {
	const users = await userRepo.getUser();
	return users;
}
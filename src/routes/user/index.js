const express = require("express");
const router = express();
const userFunc = require("../../function/user");

router.get("/", async (req, res, next) => {
	const users = await userFunc.getUser();
	res.status(200).send(users);
});

module.exports = router;
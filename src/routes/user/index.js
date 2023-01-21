const express = require("express");
const router = express();
const userFunc = require("../../function/user");

router.get("/", (req, res, next) => {
	const user = userFunc.getUser();
	res.status(200).send(user);
});

module.exports = router;
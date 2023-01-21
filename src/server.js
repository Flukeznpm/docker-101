const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/user/index");

require('dotenv').config();

app.use(express.json({ limit: "100mb" }));
app.use(cors({ credentials: true, origin: true }));
app.use(
	bodyParser.urlencoded({
		limit: "100mb",
		extended: true,
		parameterLimit: 50000,
	})
);

app.use("/test", (req, res) => {
	res.status(200).send("Hello World!")
});

app.use("/user", userRouter);

app.listen(port, () => { console.log(`Server started on port ${port}`); });

module.exports = app;
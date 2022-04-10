// expressモジュールを読み込む
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const userList = [
		{id: 1, name: "田中", age: 24, personalColor: "blue"},
		{id: 2, name: "先岡", age: 28, personalColor: "pink"},
		{id: 3, name: "斎藤", age: 24, personalColor: "green"},
	];
app.get("/", (req, res) => res.json(userList));

app.listen(9000, () => console.log("Listen on port 9000"));
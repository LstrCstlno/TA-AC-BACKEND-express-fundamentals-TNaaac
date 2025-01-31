var express = require("express")
var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.post("/json", (req, res) => {
    console.log(req.body)
})

app.post("/contract", (req, res) => {
    console.log(req.body)
})

app.listen(3000, () => {
    console.log("listening")
})
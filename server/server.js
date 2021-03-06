const express = require("express");
const model = require("./models");
const app = new express();
const cors = require("cors");
const {login, register, storeAuth, newToken} = require("./controllers/authentication");
const bodyParser = require("body-parser")
const compression = require("compression")
const Articles = require("./router/article");
const Search = require("./router/search")
const Room = require("./router/rooms")

app.use(compression());

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    optionsSuccessStatus: 200
}));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.post("/login", login);
app.post('/register',register)
app.post("/authenticated", storeAuth)
app.post('/new-token', newToken)

app.use('/articles', Articles)
app.use('',Search)
app.use('',Room)

app.listen(9000, () => {
    console.log("Server is Connected");
})
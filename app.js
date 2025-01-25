const express = require('express')
const app = express()
const cookieParser = require("cookie-parser");
const path = require("path")
const ownersRouter = require("./routes/ownersRouter")
const productRouter = require("./routes/productRouter")
const userRouter = require("./routes/userRouter")

const db = require("./config/mongoose-connect")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine","ejs");


app.use("/owners",ownersRouter);
app.use("/user",userRouter);
app.use("/product",productRouter);


app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))
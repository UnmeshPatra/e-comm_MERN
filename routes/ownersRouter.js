const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

router.get("/",(req,res)=>{
    res.send("hey");
});

if(process.env.NODE_ENV === "development"){

    router.post("/create",(req,res)=>{
        res.send("hey there")
    })
}// now we are int development enviroment 


module.exports = router;
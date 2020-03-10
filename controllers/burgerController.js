const express = require("express");
const burger = require("../models/burger")
const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});
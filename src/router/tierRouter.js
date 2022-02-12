const express = require('express');
const tierRouter = express.Router();
const fees = require("../data/fees.json");


tierRouter.route("/").get((req, res) => {
    res.render("price",
        {fees,});
});

tierRouter.route("/:id").get((req, res) => {
    const id = req.params.id
    res.render("tier",
    {
        prices: fees[id]
    })
});

module.exports = tierRouter;
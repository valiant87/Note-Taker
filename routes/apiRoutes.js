const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const shortid = require('shortid');
let DB = require("../db/db.json");

router.get("/api/notes", function (req, res) {
    res.json(DB);
});
router.post("/api/notes", function (req, res) {
    // console.log(req.body);
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: shortid.generate()
    }
    DB.push(note)
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(DB), (err) => {
        if (err) throw err;
        res.json(DB);
    })
});


module.exports = router;












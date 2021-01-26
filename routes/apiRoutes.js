const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const shortid = require("shortid");

let DB = require("../db/db.json");

router.get("/api/notes", (req, res) => {
    res.json(DB);
});
router.post("/api/notes", (req, res) => {
    // console.log(req.body);
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: shortid.generate()
    }
    DB.push(newNote)
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(DB), err => {
        if (err) throw err;
        console.log("Added a new note")
        res.json(DB);
    })
});

router.delete("/api/notes/:id", (req, res) => {
    let notes = DB;
    let newNotes = notes.filter(noteD => noteD.id !== req.params.id);
    DB = newNotes;
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(newNotes), err => {
        if (err) throw err;
        console.log("Note deleted")
        res.json(newNotes);
    });

});


module.exports = router;












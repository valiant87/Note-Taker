# Note-Taker
---

- [About the project](#About-the-project)
- [Installation](#Installation)
- [Description](#Description)
- [Tech Used](#Tech-Used)
- [License](#License)
- [Questions](#Questions)
---
![(https://www.youtube.com/watch?v=YC1w9Uqbtfg)](assets/note-taker.png)
[👉 Heroku Link]()

## About-the-project

This application can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

## Installation

Initialize and install  all the necessary dependencies by running the folowing commnds on your CLI:
* `npm init` 
* `npm i`   

## Description
 * GET `/notes` returns `notes.html` file
 * `db.json` stores and retrieves notes using `fs` module
 * GET `/api/notes/` reads a new note, saves it on the body and adds to `db.json` then returns a new note to the user.
 * POST `/api/notes` receives a new note to save on the request body and then adds it to `db.json` file, then returns a new note to the user.
 * DELETE `/api.notes/:id` receives a query `param` that holds the the id for the note to delete.
*  In order to give each note an ID, a new node package was used ` npm shortid` 

## Tech-Used

>Run `npm start` to start the server on `localhost:8080`

💡Reminder *stop/start* your server while you are going in between changes

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions
For any questions or suggestions:
[valnimirenco@gmail.com]()
[https://github.com/valiant87]()




const express = require('express');
const router = express.Router();

const noteCtrl = require('../controllers/ctrlNotes');

// http://localhost:8000/schudules/123/notes
router.post('/schedules/:id/notes', noteCtrl.createNote);

// http://localhost:3000/notes/123
router.delete('/notes/:id', noteCtrl.deleteNote);


module.exports = router;
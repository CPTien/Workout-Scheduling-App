const express = require('express');
const router = express.Router();
const scheduleCtrl = require('../controllers/ctrlSchedules');
const isLoggedIn = require('../config/auth');

// http://localhost:3000/schedules
router.get('/', scheduleCtrl.index);

// http://localhost:3000/schedules/new
router.get('/new', scheduleCtrl.newSchedule);

// http://localhost:3000/schedules/:id
router.get('/:id', isLoggedIn, scheduleCtrl.show);

// http://localhost:3000/schedules
router.post('/', isLoggedIn,  scheduleCtrl.addToSchedule); 

// http://localhost:3000/schedules/:id/edit
router.get('/:id/edit', scheduleCtrl.editSchedule); 

// http://localhost:3000/schedules/:id
router.put('/:id', scheduleCtrl.updateSchedule); 

// http://localhost:3000/schedules/:id
router.delete('/:id', scheduleCtrl.deleteSchedule);




module.exports = router;
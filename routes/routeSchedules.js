const express = require('express');
const router = express.Router();
const scheduleCtrl = require('../controllers/ctrlSchedules');
// const isLoggedIn = require('../config/auth');

router.get('/', scheduleCtrl.index);
router.get('/new', scheduleCtrl.newSchedule);
router.get('/:id', /*isLoggedIn,*/ scheduleCtrl.show);
router.post('/', /*isLoggedIn,*/  scheduleCtrl.addToSchedule); 

module.exports = router;
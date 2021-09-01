var express = require('express');
var router = express.Router();

const skillControllers = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillControllers.fullSkillSet);

//adding new skill functionality

//router.get('/new', skillControllers.addNew)

router.get('/new', skillControllers.showForm)
router.post('/new', skillControllers.addNew)

router.get('/:id', skillControllers.deleteSkill)
//router.delete('/:id',skillControllers.deleteSkill)

router.get('/:id', skillControllers.fullSkillSet)

module.exports = router;

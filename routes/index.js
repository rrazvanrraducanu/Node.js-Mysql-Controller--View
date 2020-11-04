var express = require('express');
var myController=require('../controllers/MyController');
var db=require('../database');
var router = express.Router();

router.get('/', myController.FirstPage );
router.get('/add_form', myController.AddForm );
router.post('/add', myController.Add );
router.get('/view/:id', myController.ViewFlower );
router.get('/delete/:id', myController.DeleteFlower );
router.get('/edit/:id', myController.EditFlower );
router.all('/edit/update', myController.UpdateFlower );

module.exports = router;
const express = require('express');
const shopController = require('../controllers/shopController.js');
const router = express.Router();


// routing start 

router.get('/index', shopController.home);
router.get('/all', shopController.all);
router.get('/about', shopController.about);
router.get('/contact', shopController.contact);
router.get('/contact/success', shopController.contactSuccess);

router.post('/add', shopController.addContact);


// routing end 
module.exports = router;
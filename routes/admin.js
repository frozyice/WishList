const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/add-wish', adminController.getAddItemPage);

router.post('/', adminController.postAddItems);

router.get('/delete/:id', adminController.deleteItem);

module.exports = router;

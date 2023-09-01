const express = require("express");

const router = express.Router();


router.get('/', (req,res) => {
    res.render('public/index.njk');
});

router.get('/contact', (req,res) => {
    res.render('public/contact.njk');
});


module.exports = router;
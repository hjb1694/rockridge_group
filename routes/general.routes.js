const express = require("express");
const stripTags = require("../middleware/sanitization/strip_tags");
const stripEmojis = require("../middleware/sanitization/strip_emojis");

const router = express.Router();


router.get('/', (_req,res) => {
    res.render('public/index.njk');
});

router.get('/contact', (_req,res) => {
    res.render('public/contact.njk');
});

router.post(
    '/contact', 
    stripTags,
    stripEmojis,
    (_req,res) => {
        res.render('public/contact_inquiry_submitted.njk');
    }
);


module.exports = router;
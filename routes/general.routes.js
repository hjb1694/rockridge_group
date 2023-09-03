const express = require("express");
const stripTags = require("../middleware/sanitization/strip_tags");
const stripEmojis = require("../middleware/sanitization/strip_emojis");
const Queries = require("../database/queries");

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
    async (req,res) => {

        const {
            contact_name, 
            contact_email, 
            contact_role, 
            contact_message
        } = req.body;

        await Queries.insertContactInquiry(
            contact_name, 
            contact_email, 
            contact_role, 
            contact_message
        );


        return res.render('public/contact_inquiry_submitted.njk');
    }
);


module.exports = router;
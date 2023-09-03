const sanitizeHtml = require('sanitize-html');

module.exports = function (req,_res,next) {

    const body = req.body;

    for(let field in body){

        const sanitizedContent = sanitizeHtml(body[field], {
            allowedTags: []
        });

        body[field] = sanitizedContent;

    }

    next();


}
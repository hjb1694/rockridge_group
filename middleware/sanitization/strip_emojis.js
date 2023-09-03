const emojiStrip = require('emoji-strip');

module.exports = function stripEmojis(req,_res,next) {

    const body = req.body;

    for(let field in body){

        const stripped = emojiStrip(body[field]);

        body[field] = stripped;

    }

    next();

}
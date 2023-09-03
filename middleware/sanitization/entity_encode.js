const entities = require('html-entities');

module.exports = function entitiesEncode(req,_res,next) {

    const body = req.body;

    for(let field in body){

        const encoded = entities.encode(body[field]);

        body[field] = encoded;

    }

    next();


}
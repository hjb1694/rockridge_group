const express = require("express");
const config = require("./config");
const morganMiddleware = require("./config/morgan");
const logger = require("./config/logger");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure('views', {
    express: app
});

app.use(morganMiddleware);

app.listen(
    config.port, 
    () => {
        logger.info(`Listening on port ${config.port}`);
    }
);
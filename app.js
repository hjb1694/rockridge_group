const express = require("express");
const config = require("./config");
const morganMiddleware = require("./config/morgan");
const logger = require("./config/logger");

const app = express();

app.use(morganMiddleware);

app.listen(
    config.port, 
    () => {
        logger.info(`Listening on port ${config.port}`);
    }
);
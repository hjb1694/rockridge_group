const express = require("express");
const config = require("./config");
const morganMiddleware = require("./config/morgan");

const app = express();

app.use(morganMiddleware);

app.listen(
    config.port, 
    () => {
        console.log(`Listening on port ${config.port}`);
    }
);
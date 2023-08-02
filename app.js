const express = require("express");
const config = require("./config");
const morganMiddleware = require("./config/morgan");
const logger = require("./config/logger");
const nunjucks = require("nunjucks");
const path = require("path");

const generalRoutes = require("./routes/general.routes");

const app = express();
app.use(express.static(path.join(__dirname, 'assets')));

nunjucks.configure('views', {
    express: app
});

app.use(morganMiddleware);

app.use(generalRoutes);

app.listen(
    config.port, 
    () => {
        logger.info(`Listening on port ${config.port}`);
    }
);
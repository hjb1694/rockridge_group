const dotenv = require("dotenv");

dotenv.config();

const config = {
    app_env: process.env.APP_ENV || 'development', 
    port: process.env.PORT || 3005
}

module.exports = config;
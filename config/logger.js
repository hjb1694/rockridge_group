const winston = require("winston");

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: 'log/error.log', 
            level: 'error', 
            format: winston.format.json()
        }), 
        new winston.transports.File({
            filename: 'log/warn.log', 
            level: 'warn', 
            format: winston.format.json()
        }), 
        new winston.transports.File({
            filename: 'log/combined.log', 
            level: 'info', 
            format: winston.format.combine(
                winston.format.colorize(), 
                winston.format.simple()
            )
        }), 
        new winston.transports.File({
            filename: 'log/http.log', 
            level: 'http', 
            format: winston.format.combine(
                timestamp({
                    format: 'YYYY-MM-DD hh:mm:ss.SSS A',
                }),
                json()
            )
        })
    ]
});

module.exports = logger;
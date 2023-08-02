const winston = require("winston");

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: 'error.log', 
            level: 'error', 
            format: winston.format.json()
        }), 
        new winston.transports.File({
            filename: 'warn.log', 
            level: 'warn', 
            format: winston.format.json()
        }), 
        new winston.transports.File({
            filename: 'combined.log', 
            level: 'info', 
            format: winston.format.combine(
                winston.format.colorize(), 
                winston.format.simple()
            )
        }), 
        new winston.transports.File({
            filename: 'http.log', 
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
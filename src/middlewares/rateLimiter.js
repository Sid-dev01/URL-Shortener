const rateLimit = require("express-rate-limit");


const rateLimiter = (minutes, requests) => {
    return rateLimit({
        windowMs: minutes * 60 * 1000,
        max: requests,

        standardHeaders: true,
        legacyHeaders: false,

        message : {
            success: false,
            message: "Too many requests, Please try agin later.",
        },
    });
};

module.exports = rateLimiter;
const RATE_LIMIT = require("../config/rateLimit")
const UrlController = require("../controllers/url.controller");

async function redirectRoutes(fastify) {
    fastify.get(
        "/:shortCode", 
        {
            config: {
                rateLimit: RATE_LIMIT.THIRTY_IN_ONE,
            }
        },
        UrlController.redirectToOriginalUrl
    );
}

module.exports = redirectRoutes;
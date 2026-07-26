const RATE_LIMIT = require("../config/rateLimit")
const UrlController = require("../controllers/url.controller");
const { redirectUrlSchema } = require("../schemas/url.schema");

async function redirectRoutes(fastify) {
    fastify.get(
        "/:shortCode", 
        {
            schema: redirectUrlSchema,
            config: {
                rateLimit: RATE_LIMIT.THIRTY_IN_ONE,
            }
        },
        UrlController.redirectToOriginalUrl
    );
}

module.exports = redirectRoutes;

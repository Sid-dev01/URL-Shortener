const RATE_LIMIT = require("../config/rateLimit");
const UrlController = require("../controllers/url.controller");
const { createShortUrlSchema } = require("../schemas/url.schema");

async function urlRoutes(fastify) {
    fastify.post(
        "/shorten",
        {
            schema: createShortUrlSchema,
            config: {
                rateLimit: RATE_LIMIT.THIRTY_IN_ONE,
            }
        },
        UrlController.createShortUrl
    )
}

module.exports = urlRoutes;
const rateLimiter = require("../middlewares/rateLimiter");
const UrlController = require("../controllers/url.controller");
const { createShortUrlSchema } = require("../schemas/url.schema");

async function urlRoutes(fastify) {
    fastify.post(
        "/shorten",
        {
            schema: createShortUrlSchema,
            preHandler: [rateLimiter]
        },
        UrlController.createShortUrl
    )
}

module.exports = urlRoutes;
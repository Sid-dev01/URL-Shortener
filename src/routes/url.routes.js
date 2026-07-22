const UrlController = require("../controllers/url.controller");
const { createShortUrlSchema } = require("../schemas/url.schema");

async function urlRoutes(fastify) {
    fastify.post(
        "/shorten",
        {
            schema: createShortUrlSchema,
        },
        UrlController.createShortUrl
    )
}

module.exports = urlRoutes;
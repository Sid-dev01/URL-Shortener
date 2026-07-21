const UrlController = require("../controllers/url.controller");


async function urlRoutes(fastify) {
    fastify.post(
        "/shorten",
        UrlController.createShortUrl
    )
}

module.exports = urlRoutes;
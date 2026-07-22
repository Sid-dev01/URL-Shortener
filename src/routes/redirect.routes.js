const UrlController = require("../controllers/url.controller");

async function redirectRoutes(fastify) {
    fastify.get("/:shortCode", UrlController.redirectToOriginalUrl);
}

module.exports = redirectRoutes;
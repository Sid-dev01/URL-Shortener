const rateLimiter = require("../middlewares/rateLimiter");
const UrlController = require("../controllers/url.controller");

async function redirectRoutes(fastify) {
    fastify.get(
        "/:shortCode", 
        rateLimiter,
        UrlController.redirectToOriginalUrl
    );
}

module.exports = redirectRoutes;
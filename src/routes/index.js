require('dotenv').config()
const urlRoutes = require("../routes/url.routes");
const redirectRoutes = require("../routes/redirect.routes");


async function routes (fastify) {
    fastify.register(urlRoutes,{
        prefix: `/api/${process.env.NODE_VERSION}`
    });

    fastify.register(redirectRoutes)
}

module.exports = routes;
require('dotenv').config()
const fastify = require("fastify");
const urlRoutes = require("./src/routes/url.routes");
const redirectRoutes = require("./src/routes/redirect.routes")
const errorHandler = require("./src/middlewares/errorHandler");


const app = fastify({
    logger: true,
});


app.get("/health", async () => {
    return {
        status: "success",
        message: "URL Shortner API is running successfully",
    };
});

app.register(urlRoutes,{
    prefix: `/api/${process.env.NODE_VERSION}`
});

app.register(redirectRoutes)

app.setErrorHandler(errorHandler);

module.exports = app;
const fastify = require("fastify");
const urlRoutes = require("./src/routes/url.routes");
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

app.setErrorHandler(errorHandler);

module.exports = app;
const fastify = require("fastify");
const routes = require("./src/routes/index")
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

app.register(routes);

app.setErrorHandler(errorHandler);

module.exports = app;
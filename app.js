const fastify = require("fastify");


const app = fastify({
    logger: true,
});


app.get("/health", async () => {
    return {
        status: "success",
        message: "URL Shortner API is running successfully",
    };
});


module.exports = app;
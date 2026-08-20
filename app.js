const fastify = require("fastify");
const swagger = require("@fastify/swagger");
const swaggerUi = require("@fastify/swagger-ui");
const { swaggerOptions, swaggerUiOptions } = require("./src/config/swagger");
const routes = require("./src/routes/index")
const errorHandler = require("./src/middlewares/errorHandler");
const configureCors = require("./src/config/cors");


const app = fastify({
    logger: true,
});

configureCors(app);

app.register(swagger, swaggerOptions);
app.register(swaggerUi, swaggerUiOptions);

app.register(async function healthRoutes(fastify) {
    fastify.get("/health", {
        schema: {
            tags: ["System"],
            summary: "Health check",
            description: "Checks whether the API server is running.",
            response: {
                200: {
                    description: "API is healthy.",
                    type: "object",
                    properties: {
                        status: { type: "string" },
                        message: { type: "string" },
                    },
                },
            },
        },
    }, async () => {
        return {
            status: "success",
            message: "URL Shortner API is running successfully",
        };
    });
});

app.register(routes);

app.setErrorHandler(errorHandler);

module.exports = app;

const DEFAULT_CLIENT_ORIGINS = "http://localhost:5173,http://127.0.0.1:5173";

function getAllowedOrigins() {
    return (process.env.CLIENT_ORIGIN || DEFAULT_CLIENT_ORIGINS)
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean);
}

function configureCors(app) {
    const allowedOrigins = getAllowedOrigins();
    const allowAnyOrigin = allowedOrigins.includes("*");

    app.addHook("onRequest", async (request, reply) => {
        const origin = request.headers.origin;

        if (origin && (allowAnyOrigin || allowedOrigins.includes(origin))) {
            reply.header("Access-Control-Allow-Origin", allowAnyOrigin ? "*" : origin);
            reply.header("Vary", "Origin");
            reply.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
            reply.header("Access-Control-Allow-Headers", "Content-Type");
        }

        if (request.method === "OPTIONS") {
            return reply.code(204).send();
        }
    });
}

module.exports = configureCors;

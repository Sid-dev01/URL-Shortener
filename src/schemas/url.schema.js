const createShortUrlSchema = {
    tags: ["URLs"],
    summary: "Create short URL",
    description: "Creates a short URL for a valid HTTP or HTTPS URL.",
    body: {
        type: "object",
        required: ["originalUrl"],
        additionalProperties: false,

        properties: {
            originalUrl: {
                type: "string",
                minLength: 1,
            },
        },
    },
    response: {
        201: {
            description: "Short URL created successfully.",
            type: "object",
            properties: {
                success: { type: "boolean" },
                data: {
                    type: "object",
                    properties: {
                        originalUrl: { type: "string" },
                        shortUrl: { type: "string" },
                    },
                },
            },
        },
        400: {
            description: "Invalid request body or URL.",
            type: "object",
            properties: {
                success: { type: "boolean" },
                message: { type: "string" },
            },
        },
        500: {
            description: "Unexpected server error.",
            type: "object",
            properties: {
                success: { type: "boolean" },
                message: { type: "string" },
            },
        },
    },
};

const redirectUrlSchema = {
    tags: ["URLs"],
    summary: "Redirect short URL",
    description: "Redirects a short code to its original URL.",
    params: {
        type: "object",
        required: ["shortCode"],
        properties: {
            shortCode: {
                type: "string",
                minLength: 1,
                description: "Generated short code.",
            },
        },
    },
    response: {
        302: {
            description: "Redirects to the original URL.",
            headers: {
                Location: {
                    type: "string",
                    description: "Original URL for the short code.",
                },
            },
        },
        404: {
            description: "Short URL was not found.",
            type: "object",
            properties: {
                success: { type: "boolean" },
                message: { type: "string" },
            },
        },
        500: {
            description: "Unexpected server error.",
            type: "object",
            properties: {
                success: { type: "boolean" },
                message: { type: "string" },
            },
        },
    },
};

module.exports = {
    createShortUrlSchema,
    redirectUrlSchema,
};

const createShortUrlSchema = {
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
};

module.exports = {
    createShortUrlSchema,
};
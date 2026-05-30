const { z } = require("zod");


const envSchema = z.object({
    NODE_ENV: z.
    enum(["development", "production"])
    .default("development"),


    PORT: z.coerce.number().default(5000),
});

const env = envSchema.parse(process.env);

module.exports = { env } ;
require('dotenv').config();
const app = require("./app");
const redisClient = require("./src/config/redis");


const startServer = async () => {
    try {

        await redisClient.connect();

        await app.listen({
            port: process.env.PORT,
            host: process.env.HOST,
        });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

const gracefulShutdown = async (signal) => {
    console.log(`\n${signal} received. Shutting down gracefully...`);

    try {
        await app.close();

        if (redisClient.isOpen) {
            await redisClient.quit();
        }

        console.log("✅ Server shut down successfully.");

        process.exit(0);

    } catch (error) {
        console.error("Error during shutdown:", error);
        process.exit(1);
    }
};

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

startServer();
const { createClient } = require("redis");


const redisClient = createClient({
    url: process.env.REDIS_URL,
});


redisClient.on("connect", () => {
    console.log("Connecting to Redis");
})

redisClient.on("ready", () => {
    console.log("Connected to Redis");
})

redisClient.on("error", () => {
    console.log("Error Connecting to Redis");
})

redisClient.on("end", () => {
    console.log("Redis Connection Closed");
})

module.exports = redisClient;
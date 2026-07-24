const redisClient = require("../config/redis");
const { getLookUpKey, generateRedirectCacheKey } = require("../utils/hashUrl");

async function getShortCodeByOriginalUrl(originalUrl) {
    return await redisClient.get(getLookUpKey(originalUrl));
}

async function setShortCodeByOriginalUrl(originalUrl, shortCode) {
    return await redisClient.set(getLookUpKey(originalUrl), shortCode, { EX:3600 });
}

async function getOriginalUrl(shortCode) {
    const cachedUrl = await redisClient.get(
        generateRedirectCacheKey(shortCode)
    );

    return cachedUrl ? JSON.parse(cachedUrl) : null
}

async function setOriginalUrl(shortCode, url) {
    await redisClient.set(
        generateRedirectCacheKey(shortCode),
        JSON.stringify(url)
    )
}

module.exports = {
    getShortCodeByOriginalUrl,
    setShortCodeByOriginalUrl,
    getOriginalUrl,
    setOriginalUrl,
}
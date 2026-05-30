const generateShortCode = require("../utils/generateShortCode");

const urls = new Map();

const createShortUrl = async ({ longUrl }) => {
    const shortCode = generateShortCode();

    const urlData = {
        shortCode,
        longUrl,
        createdAt: new Date().toISOString(),
    };

    urls.set(shortCode, urlData);

    return urlData;
};

module.exports = {
    createShortUrl,
}
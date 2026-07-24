const crypto = require("crypto");

function getLookUpKey(originalUrl) {
    const hash = crypto
        .createHash("sha256")
        .update(originalUrl)
        .digest("hex");

    return `lookup:${hash}`;
}

function generateRedirectCacheKey(shortCode) {
    return `url:${shortCode}`;
}


module.exports = {
    getLookUpKey,
    generateRedirectCacheKey
}
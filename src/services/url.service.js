const validateUrl = require("../utils/validateUrl");
const UrlRepository = require("../repositories/url.repository");
const generateShortCode = require("../utils/generateShortCode");

async function createShortUrl (originalUrl) {

    if (!validateUrl(originalUrl)){
        throw new Error("Invalid Url.");
    }
    let shortCode = generateShortCode();

    while(await UrlRepository.findByShortCode(shortCode)) {
        shortCode = generateShortCode();
    }

    const url = await UrlRepository.create({
        originalUrl,
        shortCode
    })

    return {
        originalUrl: url.originalUrl,
        shortUrl: `${process.env.BASE_URL}/${url.shortCode}`,
    };
}

async function getOriginalUrl(shortCode) {
    const url = await UrlRepository.findByShortCode(shortCode);

    if (!url) {
        throw new Error("Short URL not found");
    }

    return url.originalUrl;
}


module.exports = {
    createShortUrl,
    getOriginalUrl,
}

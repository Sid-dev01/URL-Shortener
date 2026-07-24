const validateUrl = require("../utils/validateUrl");
const UrlRepository = require("../repositories/url.repository");
const generateShortCode = require("../utils/generateShortCode");

async function createShortUrl (originalUrl) {

    if (!validateUrl(originalUrl)){
        throw new Error("Invalid Url.");
    }

    const existingUrl = await UrlRepository.findByOriginalUrl(originalUrl);

    if (existingUrl) {
        return {
            originalUrl: existingUrl.originalUrl,
            shortUrl: `${process.env.BASE_URL}/${existingUrl.shortCode}`
        }
    };

    let shortCode = generateShortCode();

    while(await UrlRepository.findByShortCode(shortCode)) {
        shortCode = generateShortCode();
    }

    try {
        const url = await UrlRepository.create({
            originalUrl,
            shortCode
        })

        return {
            originalUrl: url.originalUrl,
            shortUrl: `${process.env.BASE_URL}/${url.shortCode}`,
        };
    } catch (error) {
        if (
            error.code == "P2002" &&
            error.meta?.target?.includes("originalUrl")
        ) {
            const existingUrl = await UrlRepository.findByOriginalUrl(originalUrl);

            if(existingUrl){
                return{
                    originalUrl: existingUrl.originalUrl,
                    shortUrl: `${process.env.BASE_URL}/${existingUrl.shortCode}`
                }
            }
        }

        throw error;
    }
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

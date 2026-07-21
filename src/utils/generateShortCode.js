const crypto = require('crypto');

const ALPHABET ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


const generateShortCode = ( length = 6 ) => {
    let bytes = crypto.randomBytes(length);
    let shortCode = "";

    for(let i=0; i<length; i++) {
        shortCode += ALPHABET[bytes[i] % ALPHABET.length];
    }

    return shortCode;
}

module.exports = generateShortCode;
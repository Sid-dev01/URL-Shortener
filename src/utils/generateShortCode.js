const ALPHABET ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


const generateShortCode = ( length = 6 ) => {
    let shortCode = "";

    for(let i=0; i<length; i++) {
        const randomIndex = Math.floor(Math.random() * ALPHABET.length);
        shortCode += ALPHABET[randomIndex];
    }

    return shortCode;
}

module.exports = generateShortCode;
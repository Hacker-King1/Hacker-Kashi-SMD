const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

module.exports = {

    OWNER_NUMBER:
        process.env.OWNER_NUMBER ||
        "923000831014",
    
    PREFIX: process.env.PREFIX || ".",

    BOT_NAME:
        process.env.BOT_NAME ||
        "Hacker-Kashi-SMD",

    OWNER_NAME:
        process.env.OWNER_NAME ||
        "Hacker-Kashi¹⁰¹⁴",

    CAPTION:
        process.env.CAPTION ||
        "POWERED BY Hacker Kashi¹⁰¹⁴",

    STATUS_MSG:
        process.env.STATUS_MSG ||
        "Hello From Team-Kashi¹⁰¹⁴",

    NEWSLETTER_JID:
        process.env.NEWSLETTER_JID ||
        "120363425860606804@newsletter",

    MENU_IMG:
        process.env.MENU_IMG ||
        "https://bandaheali-cdn.koyeb.app/media/bot_1779069110580.jpg",

        PORT: 
        process.env.PORT ||
        "21604",
    SESSION_NAME: "hackerbot",
    USE_PAIRING_CODE: false,
    PRINT_QR_IN_TERMINAL: true,
};

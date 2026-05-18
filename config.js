const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

module.exports = {

    // =============================
    // DATABASE
    // =============================
    DATABASE_URL:
        process.env.MONGODB_URI ||
        process.env.DATABASE_URL ||
        "",

    // =============================
    // BOT CORE SETTINGS
    // =============================
    OWNER_NUMBER:
        process.env.OWNER_NUMBER ||
        "923000831014",
    
    PREFIX: process.env.PREFIX || ".",

    // =============================
    // GLOBAL BRANDING
    // =============================
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

    // =============================
    // SITE URL FOR PAIR CMD
    // =============================
    SITE_URL:
        process.env.SITE_URL ||
        "https://mr-shaban.vercel.app",

        PORT: 
        process.env.PORT ||
        "21604",
    SESSION_NAME: "hackerbot",
    USE_PAIRING_CODE: true,
    PRINT_QR_IN_TERMINAL: false,
    PAIRING_CODE: true,
};

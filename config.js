// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    apkPath: process.env.APKPATH
};

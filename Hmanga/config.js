// const fs = require('fs');
// const path = require('path');

// const configPath = path.join(app.getPath('userData'), 'hmanga-config.json');

// function saveConfig(config) {
//     try {
//         fs.writeFileSync(configPath, JSON.stringify(config));
//         return true;
//     } catch (err) {
//         console.error('Error saving config:', err);
//         return false;
//     }
// }

// function loadConfig() {
//     try {
//         if (fs.existsSync(configPath)) {
//             return JSON.parse(fs.readFileSync(configPath));
//         }
//         return null;
//     } catch (err) {
//         console.error('Error loading config:', err);
//         return null;
//     }
// }

// module.exports = { saveConfig, loadConfig };
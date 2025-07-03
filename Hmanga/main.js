const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });

  // Start with welcome screen
  mainWindow.loadFile('pages/screens/welcome.html');
  
  // Handle folder selection
  ipcMain.on('open-folder-dialog', (event) => {
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }).then(result => {
      if (!result.canceled) {
        event.sender.send('selected-folder', result.filePaths[0]);
      }
    });
  });
}

app.whenReady().then(createWindow);

// // Add this to your main.js
// const { ipcMain } = require('electron');
// const path = require('path');

// ipcMain.on('set-theme', (event, themeName) => {
//     const themePath = path.join(__dirname, 'assets', 'themes', `${themeName}-theme.css`);
//     // You might want to send this to renderer or store in config
// });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
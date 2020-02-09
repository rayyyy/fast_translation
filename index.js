// Electronの読み込み
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const globalShortcut = electron.globalShortcut
let localshortcut = require('electron-localshortcut');

// mainWindow変数の初期化
let mainWindow = null

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  })
  mainWindow.loadURL('file://' + __dirname + '/index.html')

  localshortcut.register(mainWindow, 'Command+R', function () {
    // do nothing
  });
  localshortcut.register(mainWindow, 'Command+W', function () {
    // do nothing
  });

  // mainWindow.on('closed', function () {
  //   mainWindow = null;
  // });

  globalShortcut.register('Command+H', function () {
    mainWindow.show()
  })

  mainWindow.webContents.on('did-finish-load', function () {
    mainWindow.show();
    mainWindow.focus();
  });
});

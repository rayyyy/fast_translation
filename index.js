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
    width: 600,
    maxWidth: 600,
    height: 500,
    maxHeight: 500,
    maximizable: false,
    show: false
  })
  mainWindow.loadURL('file://' + __dirname + '/index.html')

  mainWindow.on('blur', function () {
    mainWindow.hide()
  })

  localshortcut.register(mainWindow, 'Command+R', function () {
    // do nothing
  });
  localshortcut.register(mainWindow, 'Command+W', function () {
    // do nothing
  });

  globalShortcut.register('Command+H', function () {
    mainWindow.show()
  })
})


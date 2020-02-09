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
    y: 0,
    x: 9999,
    minWidth: 400,
    maxWidth: 400,
    minHeight: 300,
    maxHeight: 300,
    maximizable: false,
    minimizable: false,
    show: false,
    alwaysOnTop: true,
    movable: false,
    opacity: 0
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


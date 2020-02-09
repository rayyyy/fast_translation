// Electronの読み込み
const { app, Menu, Tray, BrowserWindow, globalShortcut } = require('electron')
let localshortcut = require('electron-localshortcut');

function setupMenu(params) {
  let appIcon = new Tray(__dirname + '/images/icon.png');
  let contextMenu = Menu.buildFromTemplate([
    { label: '終了', accelerator: 'Command+Q', click: function () { app.quit() } }
  ]);
  appIcon.setContextMenu(contextMenu);
  // アイコンにマウスオーバーした時の説明
  appIcon.setToolTip('Fast Translation');
}

// mainWindow変数の初期化
let mainWindow = null
let toggle = false

app.on('ready', function () {
  setupMenu()
  mainWindow = new BrowserWindow({
    y: 0,
    x: 5000,
    minWidth: 400,
    maxWidth: 400,
    minHeight: 300,
    maxHeight: 300,
    maximizable: false,
    minimizable: false,
    show: false,
    movable: false,
    opacity: 0.9,
    closable: false,
    titleBarStyle: 'hidden'
  })
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  app.dock.hide();
  mainWindow.setAlwaysOnTop(true, 'floating');
  mainWindow.setVisibleOnAllWorkspaces(true)
  mainWindow.setFullScreenable(false)

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
    if (toggle) {
      mainWindow.hide()
    } else {
      mainWindow.show()
    }
    toggle = !toggle
  })
})


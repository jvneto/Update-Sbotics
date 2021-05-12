const { app, BrowserWindow } = require("electron");
let window;

const { Save } = require("./src/class/__SaveFiles");

app.whenReady().then(() => {
  window = new BrowserWindow({
    titleBarStyle: "hiddenInset",
    width: 200,
    height: 200,
    backgroundColor: "#000",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  window.loadURL("file://" + __dirname + "/src/index.html");
  window.webContents.openDevTools();
});

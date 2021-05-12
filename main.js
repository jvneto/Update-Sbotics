const { app, BrowserWindow, TouchBar } = require("electron");
let window;

app.whenReady().then(() => {
  window = new BrowserWindow({
    frame: false,
    titleBarStyle: "hiddenInset",
    width: 600,
    height: 600,
    backgroundColor: "#000",
  });
  // window.loadURL("about:blank");
  window.loadURL("src/index.html");
});

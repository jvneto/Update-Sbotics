const { app, BrowserWindow, TouchBar } = require("electron");
let window;

app.whenReady().then(() => {
  window = new BrowserWindow({
    titleBarStyle: "hiddenInset",
    width: 200,
    height: 200,
    backgroundColor: "#000",
  });
  // window.loadURL("about:blank");
  window.loadURL("file://" + __dirname + "/src/index.html");
});

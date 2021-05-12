const { app, BrowserWindow, TouchBar } = require("electron");
const { path } = require("path");
const { url } = require("url");

let window;

app.whenReady().then(() => {
  window = new BrowserWindow({
    titleBarStyle: "hiddenInset",
    width: 200,
    height: 200,
    backgroundColor: "#000",
  });
  // window.loadURL("about:blank");
  window.loadURL(
    url.format({
      pathname: path.join(__dirname, "/src/html/newIndex.html"),
      protocol: "file:",
      slashes: true,
    })
  );
});

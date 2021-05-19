var sBoticsDownloader = require("sbotics-downloader");

const sbotics = new sBoticsDownloader({
  user: "sBotics",
  repository: "sBoticsBuilds",
  branch: "master",
  externalDownload: false,
  detailedAnswer: false,
  wordsToRemove: ["W32/"],
});
sbotics.file(
  "https://raw.githubusercontent.com/Txiag/sBotics/master/W32/sBotics_Data/Managed/UnityEngine.SpriteShapeModule.dll",
  {
    downloadMode: "external",
    savePath: "sBotics_Data/Managed/UnityEngine.SpriteShapeModule.dll",
  },
  (err, resp) => {
    if (err) return console.log(err);
    console.log(resp);
  }
);
sbotics.file("W32/sBotics.exe", (err, resp) => {
  if (err) return console.log(err);
  console.log(resp);
});

sbotics.file("W32/UnityPlayer.dll", (err, resp) => {
  if (err) return console.log(err);
  console.log(resp);
});

sbotics.file("W32/UnityCrashHandler32.exe", (err, resp) => {
  if (err) return console.log(err);
  console.log(resp);
});

sbotics.file("W32/sBotics_Data/data.unity3d", (err, resp) => {
  if (err) return console.log(err);
  console.log(resp);
});

sbotics.file(
  "W32/sBotics_Data/StreamingAssets/ColorTheme.json.zip",
  (err, resp) => {
    if (err) return console.log(err);
    console.log(resp);
  }
);

sbotics.file(
  "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exe",
  (err, resp) => {
    if (err) return console.log(err);
    console.log(resp);
  }
);

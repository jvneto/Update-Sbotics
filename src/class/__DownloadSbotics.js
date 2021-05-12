var before = new Date().getSeconds();
var GithubContent = require("github-content");
const homeDir = require("os").homedir();
const fs = require("fs-extra");
const { Save } = require("SaveFiles");

var gc = new GithubContent({
  owner: "Txiag",
  repo: "sBotics",
  branch: "master",
});

const githubDownload = async (pathDownload) => {
  gc.file(pathDownload, function (err, file) {
    if (err) return console.log(err);
    const path = file.path;
    const content = file.contents;
    console.log(path);
    console.log(content);
    const desktopPath = homeDir + "/desktop/sbotics/" + path;
    const save = Save(desktopPath, content);
    console.log(save);
    console.log(new Date().getSeconds() - before);
  });
};

// const sBoticsDownload = () => {
//   const download = [
//     // "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exepackage.json",
//     // "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exe",
//     // "W32/sBotics_Data/StreamingAssets/ColorTheme.json.zip",
//     "W32/UnityPlayer.dll",
//     // "W32/sBotics.exe",
//     "W32/sBotics_Data/Managed/System.Data.dll",
//     "W32/sBotics_Data/Managed/System.Windows.Forms.dll",
//     "W32/sBotics_Data/Managed/System.Security.dll",
//     "W32/sBotics_Data/Managed/System.Transactions.dll",
//     "W32/sBotics_Data/Managed/System.Web.dll",
//   ];

//   download.forEach((element) => {
//     (async () => {
//       await githubDownload(element);
//     })();
//   });
// };

// sBoticsDownload();

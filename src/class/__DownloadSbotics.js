var before = new Date().getSeconds();
var GithubContent = require("github-content");
const homeDir = require("os").homedir();
const fs = require("fs-extra");

const githubDownload = async (pathDownload) => {
  gc.file(element, function (err, file) {
    if (err) return console.log(err);
    const path = file.path;
    const content = file.contents;
    console.log(path);
    console.log(content);
    const desktopPath = homeDir + "/desktop/sbotics/";
    console.log(new Date().getSeconds() - before);
    fs.writeFile(desktopPath + path, content, (error) => {
      return error ? false : true;
    });
  });
};

const sBoticsDownload = () => {
  var gitOptions = {
    owner: "Txiag",
    repo: "sBotics",
    branch: "master",
  };
  var gc = new GithubContent(gitOptions);

  const download = [
    // "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exepackage.json",
    // "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exe",
    // "W32/sBotics_Data/StreamingAssets/ColorTheme.json.zip",
    "W32/UnityPlayer.dll",
    // "W32/sBotics.exe",
    "W32/sBotics_Data/Managed/System.Data.dll",
    "W32/sBotics_Data/Managed/System.Windows.Forms.dll",
    "W32/sBotics_Data/Managed/System.Security.dll",
    "W32/sBotics_Data/Managed/System.Transactions.dll",
    "W32/sBotics_Data/Managed/System.Web.dll",
  ];

  download.forEach((element) => {
    await githubDownload(element);
  });
};

sBoticsDownload();

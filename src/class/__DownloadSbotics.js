var GithubContent = require("github-content"); // OK
const homeDir = require("os").homedir();
import { Save } from "../utils/SaveFiles.js";
import { GitDownload } from "../utils/DownloadGithub.js";

var gc = new GithubContent({
  owner: "Txiag",
  repo: "sBotics",
  branch: "master",
});

const githubDownload = async (pathDownload) => {
  // var gitDownload = GitDownload(pathDownload);
  // var teste = await GitDownload(pathDownload);
  // console.log(pathDownload);
  // console.log(teste);
  gc.file(pathDownload, function (err, file) {
    // if (err) returnfalse);
    const path = file.path;
    const content = file.contents;
    const desktopPath = homeDir + "/desktop/sbotics/" + path;
    async () => {
      console.log(await Save(desktopPath, content));
    };
  });
};

const sBoticsDownload = () => {
  const download = [
    "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exepackage.json",
    "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exe",
    "W32/sBotics_Data/StreamingAssets/ColorTheme.json.zip",
    "W32/UnityPlayer.dll",
    "W32/sBotics.exe",
    "W32/sBotics_Data/Managed/System.Data.dll",
    "W32/sBotics_Data/Managed/System.Windows.Forms.dll",
    "W32/sBotics_Data/Managed/System.Security.dll",
    "W32/sBotics_Data/Managed/System.Transactions.dll",
    "W32/sBotics_Data/Managed/System.Web.dll",
  ];

  download.forEach((element) => {
    githubDownload(element);
  });
};

sBoticsDownload();

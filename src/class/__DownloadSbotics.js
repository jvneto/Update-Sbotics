var GithubContent = require("github-content"); // OK
const homeDir = require("os").homedir();
import { Save } from "../utils/SaveFiles.js";
import { GitDownload } from "../utils/DownloadGithub.js";

var gc = new GithubContent({
  owner: "Txiag",
  repo: "sBotics",
  branch: "master",
});

const GitDownloadSave = async (pathDownload) => {
  const gitContent = await GitDownload(pathDownload);
  console.log(gitContent);
  const desktopPath = homeDir + "/desktop/sbotics/" + pathDownload;
  const res = await Save(desktopPath, gitContent);
  return res;
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
    (async () => {
      console.log(await GitDownloadSave(element));
    })();
  });
};

sBoticsDownload();

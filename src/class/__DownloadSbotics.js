var GithubContent = require("github-content"); // OK
const homeDir = require("os").homedir();
import { Save } from "../utils/SaveFiles.js";
import { GitDownload } from "../utils/DownloadGithub.js";

const options = {
  owner: "Txiag",
  repo: "sbotics",
  branch: "master",
};
const gc = new GithubContent(options);
gc.file(
  "W32/sBotics_Data/StreamingAssets/ColorTheme.json.zip",
  (err, file) => {
    // if (err) reject(false);
    // console.log("err" + err);
    // resolve(file.contents);
    console.log(err);
    console.log(file);
    console.log(file.data.body);
  }
);

// var gc = new GithubContent({
//   owner: "jvneto",
//   repo: "sbotics",
//   branch: "origin",
// });
// const gc = new GithubContent(options);
// const GitDownloadSave = (pathDownload) => {
//   // const gitContent = await GitDownload(pathDownload);
//   // console.log(gitContent);
//   // const desktopPath = homeDir + "/desktop/sbotics/" + pathDownload;
//   // const res = await Save(desktopPath, gitContent);
//   // return res;
//   gc.file(
//     "W32/sBotics_Data/StreamingAssets/ColorTheme.json.zip",
//     (err, file) => {
//       console.log(err);
//       console.log(file);
//       // if (err) reject(false);
//       // console.log("err" + err);
//       // resolve(file.contents);
//     }
//   );
// };

// const sBoticsDownload = () => {
//   const download = [
//     "W32/sBotics_Data/SasdasdtreamingAssets/Addons/BlockEduc.exepackage.json",
//     "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exe",
//     "W32/sBotics_Data/StreamingAssets/ColorTheme.json.zip",
//     "W32/UnityPlayer.dll",
//     "W32/sBotics.exe",
//     "W32/sBotics_Data/Managed/System.Data.dll",
//     "W32/sBotics_Data/Managed/System.Windows.Forms.dll",
//     "W32/sBotics_Data/Managed/System.Security.dll",
//     "W32/sBotics_Data/Managed/System.Transactions.dll",
//     "W32/sBotics_Data/Managed/System.Web.dll",
//   ];
//   download.forEach((element) => {
//     // (async () => {
//     //   console.log(await GitDownloadSave(element));
//     // })();
//     GitDownloadSave(element);
//   });
// };

// sBoticsDownload();

var GithubContent = require("github-content");
const homeDir = require("os").homedir();
const fs = require("fs-extra");

const sBoticsDownload = () => {
  var gitOptions = {
    owner: "Txiag",
    repo: "sBotics",
    branch: "master",
  };
  var gc = new GithubContent(gitOptions);
  const download = [
    "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exepackage.json",
    "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exe",
    "W32/sBotics_Data/StreamingAssets/ColorTheme.json.zip",
    "W32/UnityPlayer.dll",
    "W32/sBotics.exe",
    "W32/sBotics_Data/Managed/System.Data.dll",
    "W32/sBotics_Data/Managed/System.Windows.Forms.dll",
  ];
  for (let index = 0; index < download.length; index++) {
    const pathDownload = download[index];
    gc.file(pathDownload, function (err, file) {
      if (err) return console.log(err);
      const path = file.path;
      const content = file.contents;
      console.log(path);
      console.log(content);
      const desktopPath = homeDir + "/desktop/sbotics/";
      fs.writeFile(desktopPath + path, content, (error) => {
        console.log(error ? false : true);
      });
    });
  }
  console.log("Donwload Success!");

  // gc.files(
  //   [
  //     "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exepackage.json",
  //     "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exe",
  //     "W32/sBotics_Data/StreamingAssets/ColorTheme.json.zip",
  //     "W32/UnityPlayer.dll",
  //     "W32/sBotics.exe",
  //     "W32/sBotics_Data/Managed/System.Data.dll",
  //     "W32/sBotics_Data/Managed/System.Windows.Forms.dll",
  //   ],
  //   function (err, files) {
  //     if (err) return console.log(err);
  //     for (let index = 0; index < files.length; index++) {
  //       const path = files[index].path;
  //       const content = files[index].contents;
  //       console.log(path);
  //       console.log(content);
  //       const desktopPath = homeDir + "/desktop/sbotics/";
  //       console.log(desktopPath + path);
  //       fs.writeFile(desktopPath + path, content, (error) => {
  //         console.log(error ? false : true);
  //         console.log(error);
  //       });
  //     }
  //   }
  // );
};;

sBoticsDownload();

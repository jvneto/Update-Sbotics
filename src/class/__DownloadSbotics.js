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
  gc.files(
    [
      "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exepackage.json",
      "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exe",
    ],
    function (err, file) {
      if (err) return console.log(err);
      for (let index = 0; index < file.length; index++) {
        const path = file.path[index];
        const content = file.contents[index];
        console.log(path);
        console.log(content);
        const desktopPath = homeDir + "/desktop/sbotics/";
        console.log(desktopPath + path);
        fs.writeFile(desktopPath + path, content, (error) => {
          console.log(error ? false : true);
          console.log(error);
        });
      }
    }
  );
};

sBoticsDownload();

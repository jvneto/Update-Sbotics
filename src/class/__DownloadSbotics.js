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
  gc.file(
    "W32/sBotics_Data/StreamingAssets/Addons/BlockEduc.exepackage.json",
    function (err, file) {
      if (err) return console.log(err);
      console.log(file.path);
      console.log(file.contents);
      const desktopPath = "/desktop/sbotics/";
      const teste = fs.writeFile(desktopPath + file.path, file, (error) => {
        return error ? false : true;
      });
      console.log(teste);
    }
  );
};
sBoticsDownload();

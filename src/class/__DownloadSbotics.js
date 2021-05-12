var GithubContent = require("github-content");
const homeDir = require("os").homedir();

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
      console.log(homeDir);
    }
  );
};
sBoticsDownload();

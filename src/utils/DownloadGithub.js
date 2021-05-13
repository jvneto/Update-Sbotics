var GithubContent = require("github-content");

const gitContent = new GithubContent({
  owner: "Txiag",
  repo: "sBotics",
  branch: "master",
});

function GitDownload(downloadPath) {
  gitContent.file(downloadPath, function (err, file) {
    if (err) return false;
    return file.contents;
    // const path = file.path;
    // const content = file.contents;
    // const desktopPath = homeDir + "/desktop/sbotics/" + path;
    // var save = Save(desktopPath, content);
    // console.log(save);
  });
}

export { GitDownload };

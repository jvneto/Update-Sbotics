var GithubContent = require("github-content");

const gitContent = new GithubContent({
  owner: "Txiagg",
  repo: "sBoticssss",
  branch: "master",
});

const GitDownload = async (downloadPath) => {
  return new Promise((resolve, reject) => {
    gitContent.file(downloadPath, (err, file) => {
      console.log(err);
      console.log(file);
      // if (err) reject(false);
      // console.log("err" + err);
      // resolve(file.contents);
    });
  });
};

export { GitDownload };

var sBoticsDownloader = require("sbotics-downloader");
import {
  SizeCreate,
  Create,
  Update,
  PercentageView,
} from "../utils/ProgressBar.js";
import Save from "../utils/SaveFiles.js";

var JSONDownloadSize = 0;
var JSONDownloadID = 1;
var JSONDonwloadID_ = 0;

const sbotics = new sBoticsDownloader({
  user: "sBotics",
  repository: "sBoticsBuilds",
  branch: "master",
  externalDownload: true,
  detailedAnswer: true,
});

const GitDownloadSave = async (path, name, prefix) => {
  const pathDownload = prefix + path + name;

  await sbotics.file(pathDownload, { savePath: path + name }, (err, resp) => {
    JSONDonwloadID_ = JSONDownloadID++;

    if (err) return Update(JSONDonwloadID_, "danger");

    Save(resp.path, resp.file)
      .then((value) => {
        Create(
          SizeCreate(JSONDownloadSize),
          "success",
          JSONDownloadSize,
          JSONDonwloadID_
        );
      })
      .catch((e) => {
        Create(
          SizeCreate(JSONDownloadSize),
          "danger",
          JSONDownloadSize,
          JSONDonwloadID_
        );
      });

    PercentageView(
      {
        progressID: JSONDonwloadID_,
        size: SizeCreate(JSONDownloadSize),
      },
      { elementView: true, elementInner: "TextProgressBar" }
    );
  });
};

const sBoticsDownload = () => {
  console.log("Iniciando");

  sbotics.file("W32.json", (err, resp) => {
    if (err) return console.log(err);
    const JSONDownload = JSON.parse(resp.file);
    JSONDownloadSize = JSONDownload["data"].length;
    JSONDownload["data"].forEach((element) => {
      (async () => {
        await GitDownloadSave(element.path, element.name, "W32/");
      })();
    });
  });
};

sBoticsDownload();

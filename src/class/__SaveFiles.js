const fs = require("fs-extra");
const save = async (pathFile, pathSaveFile) => {
  fs.writeFile(pathFile, pathSaveFile, (error) => {
    return error ? false : true;
  });
};
exports.save = save;

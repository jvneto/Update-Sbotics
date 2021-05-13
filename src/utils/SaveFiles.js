const fs = require("fs-extra");

const Save = (path, content) => {
  fs.writeFile(path, content, (error) => {
    return error ? false : true;
  });
};

export { Save };

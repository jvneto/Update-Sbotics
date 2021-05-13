const fs = require("fs-extra");

const Save = async (path, content) => {
  async () => {
    await fs.writeFile(path, content, (error) => {
      return error ? false : true;
    });
  };
};

export { Save };

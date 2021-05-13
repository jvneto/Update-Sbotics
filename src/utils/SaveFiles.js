const fs = require("fs-extra");

export const Save = async (path, content) => {
  async () => {
    await fs.writeFile(path, content, (error) => {
      return error ? false : true;
    });
  };
};

// export { Save };

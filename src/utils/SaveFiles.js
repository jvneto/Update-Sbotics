const fs = require("fs-extra");

// const Save = (path, content) => {
//   async () => {
//     await fs.writeFile(path, content, (error) => {
//       return error ? false : true;
//     });
//   };
// };
export const Save = (path, data) => {
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};
// export { Save };

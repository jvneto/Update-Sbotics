const fs = require("fs-extra");

// const Save = (path, content) => {
//   async () => {
//     await fs.writeFile(path, content, (error) => {
//       return error ? false : true;
//     });
//   };
// };
const Save = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(false);
      else resolve(true);
    });
  });
};
export { Save };

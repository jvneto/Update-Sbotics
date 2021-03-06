const fs = require("fs-extra");
var sBoticsSaver = require("sbotics-saver");

const __sBoticsSaver = new sBoticsSaver({
  useDirectoryHome: true,
  nameFolderDefault: "sBotics",
  saveAllFromDefaultDirectory: true,
});

export default function Save(path, data) {
  return new Promise((resolve, reject) => {
    __sBoticsSaver.save(path, { data: data }, (err, resp) => {
      if (err) reject(false);
      else resolve(true);
    });
  });
};

// export { Save };


// const Save = (path, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(path, data, (err) => {
//       if (err) reject(false);
//       else resolve(true);
//     });
//   });
// };
// export { Save };

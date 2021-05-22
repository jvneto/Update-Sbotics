var sBoticsSaver = require("sbotics-saver");

// const __sBoticsSaver = new sBoticsSaver({
//   defaultDirectory: "", // Por padrão é "", Define um diretorio padrão
//   useDirectoryHome: true, // Por padrão é true, usa o diretorio home do usuario para salvar as coisas
//   nameFolderDefault: "sBoitcs", // Por padrão, é desativado
//   saveAllFromDefaultDirectory: true, // Por padrão é false, salvar todos os arquivos informados no diretorio padrão
// });
const __sBoticsSaver = new sBoticsSaver({
  useDirectoryHome: true,
  nameFolderDefault: "sBotics",
  saveAllFromDefaultDirectory: true,
});

__sBoticsSaver.save(
  "sBotics_Data/StreamingAssets/Addons/JULIO.txt",
  { data: "olá mundo", useDirectoryPath: false },
  (err, resp) => {
    if (err) return console.error(err);
    console.log(resp);
  }
);

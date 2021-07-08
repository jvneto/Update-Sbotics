const defaultConfig = {
  Name: "Julio Cesar Vera Neto",
  Email: "neto-vera@hotmail.com",
  profilePicture:
    "https://ui-avatars.com/api/?name=Julio+Cesar+Vera+Neto&color=7F9CF5&background=EBF4FF",
  locale: "pt_BR",
};
const n_config = {};
let new_config = defaultConfig;
new_config = { ...new_config, ...n_config };
console.log(new_config);

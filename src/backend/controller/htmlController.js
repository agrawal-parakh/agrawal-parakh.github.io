
const path = require("path");
let homePage = (req, res) => {
  let pathToHtml = path.join(__dirname, "../../client/views/homePage.html");
  res.sendFile(pathToHtml);
};


let aboutUs = (req, res) => {
  let pathToaboutUs = path.join(__dirname, "../../client/views/aboutUs.html");
  res.sendFile(pathToaboutUs);
};

let login = (req, res) => {
  let pathTologin = path.join(__dirname, "../../client/views/login.html");
  res.sendFile(pathTologin);
};


let signUp = (req, res) => {
  let pathTosignUp = path.join(__dirname, "../../client/views/signUp.html");
  res.sendFile(pathTosignUp);
};


module.exports = {
  homePage: homePage,
  aboutUs: aboutUs,
  login: login,
  signUp: signUp
};

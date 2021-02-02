
const path = require("path");

let task01 = (req, res) => {
      let pathTotask01 = path.join(__dirname, "../../client/views/task01.html");
      res.sendFile(pathTotask01);
    };


let index = (req, res) => {
  let pathToHtml = path.join(__dirname, "../../client/views/index.html");
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
    task01:task01,
  index:index,
  aboutUs: aboutUs,
  login: login,
  signUp: signUp
};

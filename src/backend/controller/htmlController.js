
const path = require("path");
let homePage = (req, res) => {
  let pathToHtml = path.join(__dirname, "../../client/views/homePage.html");
  res.sendFile(pathToHtml);
};


let aboutUs = (req, res) => {
  // defining path to aboutUs.html file.
  let pathToaboutUs = path.join(__dirname, "../../client/views/aboutUs.html");
  // sending the file as a response
  res.sendFile(pathToaboutUs);
};

// serving about us page for response

let login = (req, res) => {
  // defining path to login.html file.
  let pathToHtml = path.join(__dirname, "../../client/views/login.html");
  // sending the file as a response
  res.sendFile(pathToHtml);
};



// serving about us page for response

let signUp = (req, res) => {
  // defining path to aboutUs.html file.
  let pathToHtml = path.join(__dirname, "../../client/views/signUp.html");
  // sending the file as a response
  res.sendFile(pathToHtml);
};

// exporting our responses.

module.exports = {
  homePage: homePage,
  aboutUs: aboutUs,
  login: login,
  signUp: signUp
};

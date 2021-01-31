//for sending dynamic content from an ejs file and also serve sttic files and imges 
// const express = require("express");
// const router = express.Router();
// const app = express();
// const logger = require("morgan");
// const path = require("path");
// console.log(__dirname);
// app.set("views", __dirname + "/client/views");
// app.engine("html", require("ejs").renderFile);
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "client/assets/images/")));
// app.use(express.static(path.join(__dirname, "client/assets/css/")));
// app.use(logger("dev"));
// function home(req, res) {
//       res.render("homePage");
//     }

//     router.route("/").get(home);
//     app.use("/",home);
 
//     app.set("port", process.env.PORT || 4000);
//     app.listen(app.get("port"), () => {
//           console.log("Application running in port: " + app.get("port"));
//         });
        

const express = require("express");
const path=require("path")
const routes = require("./backend/routes/htmlRoutes");
const app = express();
app.use("/", routes);
app.use(express.static(path.join(__dirname, "client/assets/images/")));
app.use(express.static(path.join(__dirname, "client/assets/css/")));
app.listen(2001, () => {
  console.log("Application listening on port 2001");
});

module.exports = app;

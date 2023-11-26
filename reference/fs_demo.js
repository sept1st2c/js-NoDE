const fs = require("fs");
const path = require("path");

/* 
//Create a folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder Created");
});

//Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "hello world",
  (err) => {
    if (err) throw err;
    console.log("File written to .....");
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "we love node js",
      (err) => {
        if (err) throw err;
        console.log("File written to .....");
      }
    );
  }
);


//Read Files
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

//Rename File
fs.rename(
  path.join(__dirname, "/test", "helloworld.txt"),
  path.join(__dirname, "/test", "helloworl2d.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);

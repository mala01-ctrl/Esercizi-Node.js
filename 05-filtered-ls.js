const fs = require("fs");
const path = require("path");

const dirPath = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(dirPath, (error, files) => {
  if (error) throw error;
  const filtered = files.filter((file) => path.extname(file) === ext);
  filtered.forEach((file) => console.log(file));
});

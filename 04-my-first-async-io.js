const fs = require("fs");

const filename = process.argv[2];
fs.readFile(filename, "utf8", (error, data) => {
  if (error) throw error;
  const lines = data.split("\n").length - 1;
  console.log(lines);
});

// file-operations.js
const fs = require("fs");

// Create a file named "welcome.txt" containing one line "Hello Node".
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File created successfully.");

  // Read and console.log data from "welcome.txt".
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

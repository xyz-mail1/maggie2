const fs = require("fs");
const path = require("path");

function readdirSyncRecursive(directory) {
  let results = [];
  const list = fs.readdirSync(directory);

  list.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(readdirSyncRecursive(filePath));
    } else {
      results.push(filePath);
    }
  });

  return results;
}

// Example usage:
const directoryPath = `./src/`;
const allFiles = readdirSyncRecursive(directoryPath);
console.log(allFiles);

/* import { NSFW } from "nsfwhub";  For EsModule */

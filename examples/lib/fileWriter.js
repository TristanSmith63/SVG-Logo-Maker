//fileWriter.js
const fs = require('fs');

function writeSVGToFile(svgContent, fileName) {
  fs.writeFileSync(fileName, svgContent);
}

module.exports = { writeSVGToFile };
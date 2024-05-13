//fileWriter.test.js
const fs = require('fs');
const { writeSVGToFile } = require('../lib/fileWriter');

jest.mock('fs');

test('writeSVGToFile writes SVG content to file', () => {
  const svgContent = '<svg></svg>';
  writeSVGToFile(svgContent, 'test.svg');
  expect(fs.writeFileSync).toHaveBeenCalledWith('test.svg', svgContent);
});
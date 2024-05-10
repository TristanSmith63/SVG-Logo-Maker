//logoGenerator.js
const { promptUserForLogoDetails } = require('./inputHandler');
const { writeSVGToFile } = require('./fileWriter');
const { Triangle, Circle, Square } = require('./shapes');

async function generateLogo() {
  try {
    const userInput = await promptUserForLogoDetails();
    const { text, textColor, shape, shapeColor } = userInput;

    let shapeObject;

    switch (shape) {
      case 'circle':
        shapeObject = new Circle(shapeColor);
        break;
      case 'triangle':
        shapeObject = new Triangle(shapeColor);
        break;
      case 'square':
        shapeObject = new Square(shapeColor);
        break;
      default:
        throw new Error('Invalid shape');
    }

    const svgContent = `<svg width="300" height="200">${shapeObject.render()}<text x="150" y="120" fill="${textColor}" font-size="24" text-anchor="middle">${text}</text></svg>`;
    writeSVGToFile(svgContent, 'logo.svg');

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error generating logo:', error.message);
  }
}

module.exports = { generateLogo };

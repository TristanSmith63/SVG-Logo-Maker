const fs = require('fs');
const inquirer = require('inquirer');

// Import shape classes
const { Triangle, Circle, Square } = require('./lib/shapes');

async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for your logo:',
            validate: input => {
                return input.length <= 3 ? true : 'Please enter up to three characters.';
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo:',
            choices: ['triangle', 'circle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):',
        },
    ]);
    return answers;
}

function generateSVG({ text, textColor, shape, shapeColor }) {
    let shapeInstance;
    switch (shape) {
        case 'triangle':
            shapeInstance = new Triangle(shapeColor);
            break;
        case 'circle':
            shapeInstance = new Circle(shapeColor);
            break;
        case 'square':
            shapeInstance = new Square(shapeColor);
            break;
        default:
            console.log('Invalid shape');
    }

    const svgContent = shapeInstance.render();
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
        ${svgContent}
    </svg>`;
}

function saveSVG(svgContent) {
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

async function main() {
    const userInput = await promptUser();
    const svgLogo = generateSVG(userInput);
    saveSVG(svgLogo);
}

main();

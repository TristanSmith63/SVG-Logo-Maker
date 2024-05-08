// lib/inputHandler.js
const inquirer = require('inquirer');
const { validateColorInput, validateTextInput } = require('./utils');

async function promptUserForLogoDetails() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: validateTextInput,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
      validate: validateColorInput,
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
      validate: validateColorInput,
    },
  ]);

  return userInput;
}

module.exports = { promptUserForLogoDetails };

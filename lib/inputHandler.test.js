//inputHandler.test.js
const inquirer = require('inquirer');
const { promptUserForLogoDetails } = require('../lib/inputHandler');

jest.mock('inquirer');

test('promptUserForLogoDetails returns user input', async () => {
  const userInput = {
    text: 'ABC',
    textColor: 'red',
    shape: 'circle',
    shapeColor: 'blue',
  };

  inquirer.prompt.mockResolvedValue(userInput);

  const result = await promptUserForLogoDetails();

  expect(result).toEqual(userInput);
});
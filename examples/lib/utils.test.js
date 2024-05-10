//utils.test.js
const { validateColorInput, validateTextInput } = require('../lib/utils');

test('validateColorInput returns true for valid color input', () => {
  expect(validateColorInput('red')).toBe(true);
});

test('validateColorInput returns false for empty color input', () => {
  expect(validateColorInput('')).toBe(false);
});

test('validateTextInput returns true for valid text input', () => {
  expect(validateTextInput('ABC')).toBe(true);
});

test('validateTextInput returns false for empty text input', () => {
  expect(validateTextInput('')).toBe(false);
});
//shapes.test.js
const { Triangle, Circle, Square } = require('../lib/shapes');

test('Triangle render method generates correct SVG string', () => {
  const triangle = new Triangle('blue');
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle render method generates correct SVG string', () => {
  const circle = new Circle('green');
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});

test('Square render method generates correct SVG string', () => {
  const square = new Square('red');
  expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
});

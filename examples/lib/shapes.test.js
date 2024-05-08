const { Triangle, Circle, Square } = require('./lib/shapes');

test('renders triangle SVG with the given color', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toBe('<svg width="100" height="100"><polygon points="50,0 100,100 0,100" fill="red" /></svg>');
});

test('renders circle SVG with the given color', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<svg width="100" height="100"><circle cx="50" cy="50" r="50" fill="blue" /></svg>');
});

test('renders square SVG with the given color', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<svg width="100" height="100"><rect x="0" y="0" width="100" height="100" fill="green" /></svg>');
});

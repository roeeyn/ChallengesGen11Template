const { hello } = require('./challenge0.js');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello world!");
});
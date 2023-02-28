const stringLength = require('./stringLength');

test("String Length", () => {
  expect(stringLength("example")).toBe(7);
});

test("Check string length", () => {
  expect(() => stringLength("example1234567")).toThrow('string length should be in between 1 and 10');
});
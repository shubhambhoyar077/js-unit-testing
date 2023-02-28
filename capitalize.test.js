const capitalize = require('./capitalize');

test("Capitalize string", () => {
  expect(capitalize("example")).toBe('Example');
});
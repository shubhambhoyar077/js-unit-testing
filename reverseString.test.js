const reverseString = require("./reverseString");

test('check reverse string', () => {
  const str = reverseString("shubham").split("").reverse().join("");

  expect(str).toStrictEqual("shubham");
});
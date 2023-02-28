const Calculator = require('./calculator');
const calc = new Calculator();

describe("Calculator", () => {
  
  test("add(5+3)=8", () => {
    expect(calc.add(5, 3)).toBe(8);
  });
  test("subtract(5-3)=2", () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });
  test("multiply(5*3)=15", () => {
    expect(calc.multiply(5, 3)).toBe(15);
  });
  test("divide(6/3)=2", () => {
    expect(calc.divide(6, 3)).toBe(2);
  });
});
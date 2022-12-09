// const { isLeapYear } = require('../index');
const { badIsLeapYear: isLeapYear } = require('../index');
const { tests } = require('../tests');

describe("isLeapYear", () => {
  tests.forEach(({ input, expectedResult }) => {
    it(`${input} is a leap year: ${expectedResult}`, () => {
      const result = isLeapYear(input);
      expect(result).toBe(expectedResult);
    });
  });
});
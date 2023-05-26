import { assert } from "chai";

// import { isLeapYear } from "../index.cjs";
import { badIsLeapYear as isLeapYear } from "../index.cjs";
import { tests } from '../tests.cjs';

describe("isLeapYear", () => {
  tests.forEach(({ input, expectedResult }) => {
    it(`${input} is a leap year: ${expectedResult}`, () => {
      const result = isLeapYear(input);
      assert.equal(result, expectedResult);
    });
  });
});

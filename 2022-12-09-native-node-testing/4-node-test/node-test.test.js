import { test as describe } from "node:test";
import { strict as assert } from "node:assert";

import { isLeapYear } from "../index.cjs";
// import { badIsLeapYear as isLeapYear } from "../index.cjs";
import { tests } from '../tests.cjs';

describe("isLeapYear", async (testSuite) => {
  for (const { input, expectedResult } of tests) {
    await testSuite.test(`${input} is a leap year: ${expectedResult}`, () => {
      const result = isLeapYear(input);
      assert.equal(result, expectedResult);
    });
  }
});

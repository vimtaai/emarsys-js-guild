import { strict as assert } from "node:assert";

// import { isLeapYear } from "../index.cjs";
import { badIsLeapYear as isLeapYear } from "../index.cjs";
import { tests } from "../tests.cjs";

// function assert(actualValue, expectedValue, message = "") {
//   if (actualValue === expectedValue) {
//     return;
//   }

//   throw new Error((message ? `${message}: `: "") + `expected \`${actualValue}\` to be \`${expectedValue}\``);
// }

function describe(testName, testSuite) {
  console.group(testName);
  testSuite();
  console.groupEnd();
}

async function it(testName, test) {
  console.group();

  try {
    test();
    console.log(`✔ ${testName}`);
  } catch(error) {
    console.error(`✖ ${testName}`);
    console.group();
    const source = error.stack.split('\n')[1];
    console.log(`Test failed: ${error.message}\n${source}`);
    console.groupEnd();
  }

  console.groupEnd();
}

describe("isLeapYear", () => {
  tests.forEach(({ input, expectedResult }) => {
    it(`Test: ${input} is a leap year: ${expectedResult}`, () => {
      const result = isLeapYear(input);
      assert.equal(result, expectedResult);
    });
  });
});

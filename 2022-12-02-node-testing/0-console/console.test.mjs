// import { isLeapYear } from "../index.cjs";
import { badIsLeapYear as isLeapYear } from "../index.cjs";
import { tests } from "../tests.cjs";

console.group("isLeapYear");
tests.forEach(({ input, expectedResult }) => {
  const result = isLeapYear(input);
  console.log(`Test: ${input} is a leap year: ${expectedResult}`);
  console.assert(result === expectedResult);
});

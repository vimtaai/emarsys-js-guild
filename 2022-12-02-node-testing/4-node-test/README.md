# Node native testing

## [Test](https://nodejs.org/api/test.html)
```js
test(suiteName, async (t) => {
  await t.test(testName, () => {
    assert.equal(actualValue, expectedValue)
  });
});
```
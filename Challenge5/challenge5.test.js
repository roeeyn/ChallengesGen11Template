const { digitsCount } = require("./challenge5.js");

const noStrConvert = fn => !RegExp('`|String|\'|\"', 'gm').test(fn)
test("TESTING main fun", () => expect(noStrConvert(digitsCount)).not.toBe(false));
​
let [numVector, resVector] = [[
  0, 12345, 1289396387328, -1232323, 3463463874638476,
  -231.2e6, 1283939312321, -231273683, 3.2e6, 314890e3 ],[
  1, 5, 13, 7, 16, 9, 13, 9, 7, 9 ]]
for (let i in numVector) {
  test("TESTING main fun", () => expect(digitsCount(numVector[i])).toBe(resVector[i]));
}
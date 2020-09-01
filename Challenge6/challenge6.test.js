const { canPayCost } = require("./challenge6.js");

test("TESTING main fun", () => expect(canPayCost("BB", "1B")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("BR", "1B")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("UBC", "1B")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("UR", "1B")).toBe(false));
test("TESTING main fun", () => expect(canPayCost("B", "1B")).toBe(false));
test("TESTING main fun", () => expect(canPayCost("U", "U")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("WU", "U")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("C", "U")).toBe(false));
test("TESTING main fun", () => expect(canPayCost("RGG", "RGG")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("URGG", "RGG")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("RRG", "RGG")).toBe(false));
test("TESTING main fun", () => expect(canPayCost("WWGG", "RGG")).toBe(false));
test("TESTING main fun", () => expect(canPayCost("WWRCC", "2WWC")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("WWURGC", "2WWC")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("WWCC", "2WWC")).toBe(false));
test("TESTING main fun", () => expect(canPayCost("WRCCC", "2WWC")).toBe(false));
test("TESTING main fun", () => expect(canPayCost("WWRRR", "2WWC")).toBe(false));
test("TESTING main fun", () =>
  expect(canPayCost("WUBRGC", "WUBRG")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("BBBB", "4")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("BBCC", "3")).toBe(true));
test("TESTING main fun", () => expect(canPayCost("BBCC", "5")).toBe(false));
test("TESTING main fun", () =>
  expect(canPayCost("WWWWUUUUBBBBRR", "12RR")).toBe(true));
test("TESTING main fun", () =>
  expect(canPayCost("WWWWUUUUBBBBRR", "11RR")).toBe(true));
test("TESTING main fun", () =>
  expect(canPayCost("WWWWUUUUBBBBRR", "13RR")).toBe(false));
test("TESTING main fun", () =>
  expect(canPayCost("WWWWUUUUBBBBRGG", "13RR")).toBe(false));
test("TESTING main fun", () =>
  expect(canPayCost("WWWWUUUUBBBBRRRRGGGG", "15")).toBe(true));

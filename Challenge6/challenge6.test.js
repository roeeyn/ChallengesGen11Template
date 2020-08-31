const { canPayCost } = require("./challenge6.js");

test("TESTING main fun", () => expecet(canPayCost("BB", "1B")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("BR", "1B")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("UBC", "1B")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("UR", "1B")).toBe(false));
test("TESTING main fun", () => expecet(canPayCost("B", "1B")).toBe(false));
test("TESTING main fun", () => expecet(canPayCost("U", "U")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("WU", "U")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("C", "U")).toBe(false));
test("TESTING main fun", () => expecet(canPayCost("RGG", "RGG")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("URGG", "RGG")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("RRG", "RGG")).toBe(false));
test("TESTING main fun", () => expecet(canPayCost("WWGG", "RGG")).toBe(false));
test("TESTING main fun", () => expecet(canPayCost("WWRCC", "2WWC")).toBe(true));
test("TESTING main fun", () =>
  expecet(canPayCost("WWURGC", "2WWC")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("WWCC", "2WWC")).toBe(false));
test("TESTING main fun", () =>
  expecet(canPayCost("WRCCC", "2WWC")).toBe(false));
test("TESTING main fun", () =>
  expecet(canPayCost("WWRRR", "2WWC")).toBe(false));
test("TESTING main fun", () =>
  expecet(canPayCost("WUBRGC", "WUBRG")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("BBBB", "4")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("BBCC", "3")).toBe(true));
test("TESTING main fun", () => expecet(canPayCost("BBCC", "5")).toBe(false));
test("TESTING main fun", () =>
  expecet(canPayCost("WWWWUUUUBBBBRR", "12RR")).toBe(true));
test("TESTING main fun", () =>
  expecet(canPayCost("WWWWUUUUBBBBRR", "11RR")).toBe(true));
test("TESTING main fun", () =>
  expecet(canPayCost("WWWWUUUUBBBBRR", "13RR")).toBe(false));
test("TESTING main fun", () =>
  expecet(canPayCost("WWWWUUUUBBBBRGG", "13RR")).toBe(false));
test("TESTING main fun", () =>
  expecet(canPayCost("WWWWUUUUBBBBRRRRGGGG", "15")).toBe(true));

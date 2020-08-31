const { operation } = require("./challenge1.js");

test("TESTING main fun", () => expect(operation(12, 12), "added"));
test("TESTING main fun", () => expect(operation(100, 76), "subtracted"));
test("TESTING main fun", () => expect(operation(6, 4), "multiplied"));
test("TESTING main fun", () => expect(operation(528, 22), "divided"));
test("TESTING main fun", () => expect(operation(10, 12), null));

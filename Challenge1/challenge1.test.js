const { operation } = require("./challenge1.js");

test("TESTING main fun", () => expect(operation(12, 12)).toBe("added"));
test("TESTING main fun", () => expect(operation(100, 76)).toBe("substracted"));
test("TESTING main fun", () => expect(operation(6, 4)).toBe("multiplied"));
test("TESTING main fun", () => expect(operation(528, 22)).toBe("divided"));
test("TESTING main fun", () => expect(operation(10, 12)).toBe(null));

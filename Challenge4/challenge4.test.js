const { isUndulating } = require("./challenge4.js");

test("TESTING main fun", () => expect(isUndulating(121)).toBe(true));
test("TESTING main fun", () => expect(isUndulating(373737)).toBe(true));
test("TESTING main fun", () => expect(isUndulating(12)).toBe(false));
test("TESTING main fun", () => expect(isUndulating(12122)).toBe(false));
test("TESTING main fun", () => expect(isUndulating(85856)).toBe(false));
test("TESTING main fun", () => expect(isUndulating(949494)).toBe(true));
test("TESTING main fun", () => expect(isUndulating(494)).toBe(true));
test("TESTING main fun", () => expect(isUndulating(363738)).toBe(false));
test("TESTING main fun", () => expect(isUndulating(3663)).toBe(false));
test("TESTING main fun", () => expect(isUndulating(81818181)).toBe(true));

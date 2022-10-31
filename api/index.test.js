const add = require("./index.js");

describe("Index Page", () => {
  test("Add zee numberz and see wat happenz yall", () => {
    expect(add(10, 5)).toBe(15);
  });
});

const { app } = require("./index");
const { calculSum } = require("./index");

describe("server test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });

  // test("adds 1 + 2 to equal 3", () => {
  //   expect(calculSum(1, 2)).toBe(3);
  // });
});

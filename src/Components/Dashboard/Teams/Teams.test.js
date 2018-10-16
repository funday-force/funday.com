const funcs = require("../../../utilities/functions");

// HUNTERS TEST - NOT TESSAS
describe("handleInput method", () => {
  test("should return same string", () => {
    let result = funcs.handleTeamInput("Tessa");
    expect(result).toBe("Tessa");
  });
});

describe("inputHanlde method", () => {
  test("should return a string", () => {
    let result = funcs.handleTeamInput("value");
    expect(typeof result).toBe("string");
  });
});

describe("inputHanlde method", () => {
  test("should not be a number", () => {
    let result = funcs.handleTeamInput("value");
    expect(typeof result).not.toBe("number");
  });
});

describe("inputHanlde method", () => {
  test("should return a string", () => {
    let result = funcs.handleTeamInput("value");
    expect(typeof result).toBe("string");
  });
});

describe("inputHanlde method", () => {
  test("should return a string", () => {
    let result = funcs.handleTeamInput("value");
    expect(result).toMatch("value");
  });
});

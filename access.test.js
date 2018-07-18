const Better = require("./access.js");

describe("Better", () => {
  const nested = { a : { b : { c : { d : 42 } } } };

  it("still allows intermediary access like a normal object", () => {
    const obj = Better(nested);

    expect(obj.a.b.c.d.value).toBe(42);
  });

  it("will not error when accessing undefined space", () => {
    const obj = Better(nested);

    expect(obj.a.fish.hoopla.dni.value).toBe(undefined);
  });

  it("allows for a default value in lieu of desired value", () => {
    const obj = Better(nested);

    expect(obj.a.fish.hoopla.dni.or(9001).value).toBe(9001);
  });

  it("lets you find what the last value was", () => {
    const obj = Better(nested);

    expect(
      obj.a.b.fish.atrus.catch(x => JSON.stringify(x)).value
    ).toBe("{\"c\":{\"d\":42}}")
  });
});

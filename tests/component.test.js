const { default: Component } = require("../lib/component");

describe("Component", () => {
  describe("render", () => {
    it("should throw an error an error", () => {
      const component = new Component();
      expect(() => component.render()).toThrow();
    });
  });
});

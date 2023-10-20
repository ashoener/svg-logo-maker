const { default: Circle } = require("../lib/circle");

describe("Circle", () => {
  describe("render", () => {
    it("should return a circle element", () => {
      const svg = new Circle();
      expect(svg.render()).toEqual(
        `<circle cx="150" cy="100" r="80" fill="white" />`
      );
    });
    it("should return a blue circle element", () => {
      const svg = new Circle("blue");
      expect(svg.render()).toEqual(
        `<circle cx="150" cy="100" r="80" fill="blue" />`
      );
    });
  });
});

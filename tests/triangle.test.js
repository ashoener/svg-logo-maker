const { default: Triangle } = require("../lib/triangle");

describe("Triangle", () => {
  describe("render", () => {
    it("should return a triangle element", () => {
      const svg = new Triangle();
      expect(svg.render()).toEqual(
        `<polygon points="0,0 150,200 300,0" fill="white" />`
      );
    });
    it("should return a blue triangle element", () => {
      const svg = new Triangle("blue");
      expect(svg.render()).toEqual(
        `<polygon points="0,0 150,200 300,0" fill="blue" />`
      );
    });
  });
});

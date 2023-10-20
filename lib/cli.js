import { validateColor } from "./colors.js";
import SVG from "./svg.js";
import Circle from "./circle.js";
import Triangle from "./triangle.js";
import Square from "./square.js";
import Text from "./text.js";
import inquirer from "inquirer";

import fs from "fs/promises";

class CLI {
  constructor() {
    this.svg = new SVG();
    this.shapes = { Circle, Triangle, Square };
    /**
     * @type {import("inquirer").QuestionCollection<import("inquirer").Answers>}
     */
    this.questions = [];
  }

  async start() {
    const answers = await inquirer.prompt(this.questions);
  }
}

export default CLI;

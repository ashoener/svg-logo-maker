import Component from "./component";

class Text extends Component {
  constructor(children = [], color = "white") {
    super(children);
    this.color = color;
  }

  render() {
    return [
      `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">`,
      this.renderInner(),
      `</text>`,
    ].join("");
  }
}

export default Text;

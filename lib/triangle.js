import Component from "./component";

class Triangle extends Component {
  constructor(color = "white") {
    super([]);
    this.color = color;
  }

  render() {
    return `<polygon points="0,0 150,200 300,0" fill="${this.color}" />`;
  }
}

export default Triangle;

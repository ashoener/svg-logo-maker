class Component {
  constructor(children = []) {
    this.children = children;
  }

  render() {
    throw new Error("Method must be implemented on child class");
  }
}

export default Component;

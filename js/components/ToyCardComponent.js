class ToyCardComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement("article");
    this.initialize();
  }

  initialize = () => {
    console.log(this.props);
    this.htmlElement.className = "card p-3 shadow-sm";
    this.htmlElement.innerHTML = "hello";
  };
}

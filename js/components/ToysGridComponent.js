class ToysGridComponent {
  constructor() {
    this.htmlElement = document.createElement("div");
    this.state = {
      toys: [],
    };
    this.initialize();
  }

  saveData = (toys) => {
    this.state.toys = toys;
    this.render();
    console.log(this.state.toys);
  };

  showError = (error) => {
    console.log(error);
  };

  initialize = () => {
    API.getToys(this.saveData, this.showError);
    this.htmlElement.className = "d-flex justify-content-center";

    this.render();
  };

  render = () => {
    if (this.state.toys.length === 0) {
      this.htmlElement.innerHTML = "";
      this.htmlElement.innerHTML = '<img src="assets/loading.gif">';
    } else {
      const toyComponent = this.state.toys.map(
        (toy) => new ToyCardComponent(toy)
      );
      console.log("helo", toyComponent);
      const toyElements = toyComponent.map((toy) => toy.htmlElement);
      this.htmlElement.append(...toyElements);
    }
  };
}

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

    this.render();
  };

  render = () => {
    if (this.state.toys.length === 0) {
      this.htmlElement.innerHTML = "No information";
    } else {
      this.htmlElement.innerHTML =
        "<pre>" + JSON.stringify(this.state.toys) + "</pre>";
    }
  };
}

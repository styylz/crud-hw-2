class ToysGridComponent {
  constructor() {
    this.htmlElement = document.createElement("div");
    this.state = {
      toys: [],
    };
    this.initialize();
  }

  fetchToys = () => {
    // kreipiasi i API po partraukymo issaugos
    API.getToys(this.saveData, this.showError);
  };

  deleteToy = (id) => {
    //istrina elementa pagal id ir grazina is fetchToys issaugotus elementus
    API.deleteToys(id, this.fetchToys, this.showError);
  };

  saveData = (toys) => {
    this.state.toys = toys;
    this.render();
  };

  showError = (error) => {
    console.log(error);
  };

  initialize = () => {
    this.fetchToys();
    API.getToys(this.saveData, this.showError);
    this.htmlElement.className = "d-flex justify-content-center flex-wrap row";

    this.render();
  };

  render = () => {
    if (this.state.toys.length === 0) {
      this.htmlElement.innerHTML = '<img src="assets/loading.gif">';
    } else {
      this.htmlElement.innerHTML = "";
      const toyComponent = this.state.toys.map(
        //id ir visi like cardPropsai
        //kodel id nera perduodamas?
        ({ id, ...props }) =>
          new ToyCardComponent({
            ...props,
            //kaip cia issikviecia funkcija ir kodel arrow ?
            onDelete: () => this.deleteToy(id),
          })
      );

      const toyElements = toyComponent.map((toy) => toy.htmlElement);
      this.htmlElement.append(...toyElements);
    }
  };
}

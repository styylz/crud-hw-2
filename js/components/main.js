const root = document.querySelector("#root");

const toysComponent = new ToysGridComponent();

root.append(toysComponent.htmlElement);

// test
// setTimeout(() => {
//   toysComponent.deleteToy("100");
// }, 2000);

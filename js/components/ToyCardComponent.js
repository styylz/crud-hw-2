class ToyCardComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement("article");
    this.initialize();
  }

  initialize = () => {
    const { title, price, ageRestrictions, discount, imgSrc } = this.props;
    this.htmlElement.className = "card p-3 shadow-sm w-25 h-25 mx-2 my-2";
    this.htmlElement.innerHTML = `
    <div class="card-body">
    <img class="h-50 w-100" src= ${imgSrc}></img>
        <h2 class="h3"> ${title} </h2>
        <p> Price: ${price.amount} ${price.currency} </p>
        <p> Age restriction: ${ageRestrictions.from}  </p>
        <p> Discount: ${discount.amount} ${discount.type} </p>
        </div>
    `;
  };
}

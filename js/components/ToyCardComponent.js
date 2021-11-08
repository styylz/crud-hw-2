class ToyCardComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement("article");
    this.initialize();
  }

  calcPercentage = (discountType, price, disAmount) => {
    let discount;

    switch (discountType) {
      case "percentage":
        discount = (price / 100) * disAmount;
        break;
      case "toFixed":
        discount = (disAmount / 100) * price;
        break;
      case "amount":
        let prediscount = (price / 100) * disAmount;
        discount = price - prediscount;
    }
    return discount;
  };

  initialize = () => {
    const { title, price, ageRestrictions, discount, imgSrc, onDelete } =
      this.props;
    this.htmlElement.className = "card p-3 shadow-sm w-25 h-25 mx-2 my-2";
    this.htmlElement.innerHTML = `
    <div class="card-body">
    <img class="h-50 w-100" src= ${imgSrc}></img>
        <h2 class="h3"> ${title}  </h2>
        <p> Age restriction: ${ageRestrictions.from}  </p>
        <p> Price: ${price.amount} ${price.currency} </p>
        <p> Discount : ${this.calcPercentage(
          discount.type,
          price.amount,
          discount.amount
        )}
        ${price.currency}
        </div>
    <button class ="btn btn-danger del-btn  "> X </button>
    `;

    const delBtn = this.htmlElement.querySelector(".del-btn");
    delBtn.addEventListener("click", onDelete);
  };
}

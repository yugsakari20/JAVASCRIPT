const productData = JSON.parse(localStorage.getItem("productData")) || [];
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (product) => {
  const index = cart.findIndex((item) => item.id === product.id);

  if (index !== -1) {
    cart[index].qty++;
  } else {
    product.qty = 1;
    cart.push(product);
  }


  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
};

const filterCategory = () => {
  const categoryValue = document.getElementById("category").value.toLowerCase();

  const resultCategory = productData.filter(
    (product) => product.category.toLowerCase() === categoryValue
  );

  displayData(resultCategory);
};

document.getElementById("Filter").addEventListener("click", filterCategory);

const sortProduct = () => {
  const sortValue = document.getElementById("sort").value;

  if (sortValue === "LTH") {
    productData.sort((a, b) => a.Price - b.Price);
  } else if (sortValue === "HTL") {
    productData.sort((a, b) => b.Price - a.Price);
  }

  displayData(productData);
};

document.getElementById("Sort").addEventListener("click", sortProduct);

const displayData = (data) => {
  document.getElementById("data").innerHTML = "";
  data.forEach((product) => {
    const div = document.createElement("div");

    const Name = document.createElement("p");
    const Price = document.createElement("p");
    const Image = document.createElement("img");
    const Category = document.createElement("p");
    const buy = document.createElement("button");

    Name.innerHTML = `Name: ${product.Name}`;
    Price.innerHTML = `Price: ${product.Price}`;
    Image.src = product.Image;
    Category.innerHTML = `Category: ${product.category}`;
    buy.innerHTML = "Add to Cart";

    buy.addEventListener("click", () => addToCart(product));

    div.append(Image, Name, Price, Category, buy);
    document.getElementById("data").append(div);
  });
};

displayData(productData);

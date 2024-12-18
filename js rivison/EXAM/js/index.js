import { deleteFood, foodApi } from "../api/api.js";
import { navbar } from "../navbar/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let foodArray = await foodApi.get();
let cart = JSON.parse(localStorage.getItem("cart")) || []; 


const displayData = (data) => { 
  document.getElementById("display").innerHTML = "";
  data.map((e) => {
    const div = document.createElement("div");

    const name = document.createElement("p");
    const catagorey = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("img");
    const remove = document.createElement("button");
    const addToCart = document.createElement("button");

    name.innerHTML = e.name;
    catagorey.innerHTML = e.catagorey;
    price.innerHTML = `₹${e.price}`;
    image.src = e.image;
    remove.innerHTML = "DELETE";
    addToCart.innerHTML = "Add to Cart";

    remove.addEventListener("click", async () => {
      await deleteFood(e.id);
      const foodArr = await foodApi.get();
      displayData(foodArr); 
    });

    addToCart.addEventListener("click", () => addItemToCart(e));

    div.append(image, name, catagorey, price, remove, addToCart); 
    document.getElementById("display").append(div);
  });
};

const addItemToCart = (elem) => {
  let existingProduct = cart.find((e) => e.id === elem.id);

  if (existingProduct) {
    existingProduct.qty++;
  } else {
    cart.push({ ...elem, qty: 1 });
  }

  saveCartToLocalStorage();
  displayCart(cart);
};


const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const sortFood = () => {
  const sortValue = document.getElementById("sort").value;

  if (sortValue === "LTH") {
    foodArray.sort((a, b) => a.price - b.price);
  } else if (sortValue === "HTL") {
    foodArray.sort((a, b) => b.price - a.price);
  }

  displayData(foodArray);
};

document.getElementById("sort").addEventListener("change", sortFood);

displayData(foodArray);



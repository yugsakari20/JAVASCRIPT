import { navbar } from "../navbar/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let cart = JSON.parse(localStorage.getItem("cart")) || []; 

const displayCart = (data) => {
  const cartContainer = document.getElementById("displayCart");
  cartContainer.innerHTML = "";

  data.forEach((e) => {
    const div = document.createElement("div");

    const name = document.createElement("p");
    const category = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("img");
    const qty = document.createElement("p");

    name.innerHTML = e.name;
    category.innerHTML = `Category: ${e.catagorey}`;
    price.innerHTML = `Price: ₹${e.price}`;
    image.src = e.image;
    qty.innerHTML = `Quantity: ${e.qty}`;

   
    div.append(image, name, category, price, qty);
    cartContainer.append(div);
  });

};

displayCart(cart);

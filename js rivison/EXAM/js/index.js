import { deleteFood, foodApi } from "../api/api.js";
import { navbar } from "../navbar/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let foodArray = await foodApi.get();

const displayData = (data) => { 
  document.getElementById("display").innerHTML = "";
  data.map((e) => {
    const div = document.createElement("div");

    const name = document.createElement("p");
    const catagorey = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("img");
    const remove = document.createElement("button");
    const addtocart = document.createElement("button");

    name.innerHTML = e.name;
    catagorey.innerHTML = e.catagorey;
    price.innerHTML = e.price;
    image.src = e.image;
    remove.innerHTML = "DELETE";
    addtocart.innerHTML = "Add to cart";

    remove.addEventListener("click", async () => {
      await deleteFood(e.id);
      const foodArr = await foodApi.get();
      displayData(foodArr); 
    });

    addtocart.addEventListener("click",() => addtocart(e))

    div.append(image, name, catagorey, price, remove, addtocart); 
    document.getElementById("display").append(div);
  });
};


displayData(foodArray); 

const addtocart = async () => {
  let existproduct = false;

data.cart.map((e) => {
    if (e.id === elem.id) {
        e.qty++;
        existproduct = true;
    }
});

if (!existproduct) {
    data.cart.push({ ...elem, qty: 1 });
}

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
document.getElementById("sort").addEventListener("click", sortFood);


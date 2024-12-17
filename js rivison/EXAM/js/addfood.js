import { foodApi } from "../api/api.js";
import { navbar } from "../navbar/navbar.js";

document.getElementById("navbar").innerHTML = navbar()


let foodArray = await foodApi.get()

const handleFood = async (e) => {
    e.preventDefault()

    let foods = {
        name:document.getElementById("name").value,
        catagorey: document.getElementById("catagorey").value,
        price : document.getElementById("price").value,
        image : document.getElementById("image").value
    }
     await foodApi.post(foods)

}

console.log(foodArray);
document.getElementById("form").addEventListener("submit",handleFood)
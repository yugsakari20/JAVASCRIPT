import { productApi } from "../API/product.js";
import navbar from "../componets/navbar.js";

document.getElementById("navbar").innerHTML = navbar()



let product = await productApi.get()
const handProduct = async (e) => {
    e.preventDefault();

    let product = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        image: document.getElementById("image").value,
        catagorey: document.getElementById("catagorey").value
    }
    await productApi.post(product);

}

document.getElementById("addproduct").addEventListener("submit",handProduct)
console.log(product);
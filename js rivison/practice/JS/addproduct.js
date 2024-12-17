import { productApi } from "../API/product.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


const handProduct = async (e)=>{
    e.preventDefault()

    const product = {
        productName:document.getElementById("productName").value,
        price:document.getElementById("price").value,
        category:document.getElementById("category").value,
        image:document.getElementById("image").value
    }
    productApi.post(product)

    
}

    let productArray = await productApi.get()


document.getElementById("product-form").addEventListener("submit",handProduct)

console.log(productArray);

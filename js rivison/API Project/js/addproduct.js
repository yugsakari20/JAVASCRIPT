import productapi from "../API/productapi.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let productarray = []

const handproduct = async (e) =>{
    e.preventDefault();

    const product = {
        productName: document.getElementById("productName").value,
        price: document.getElementById("price").value,
        image: document.getElementById("image").value
    }
    productarray.push(product)
    productapi.post(productarray)
}
const getData = async () => {
    productarray = await  productapi.get()
}


document.getElementById("productForm").addEventListener("submit",handproduct)
getData()
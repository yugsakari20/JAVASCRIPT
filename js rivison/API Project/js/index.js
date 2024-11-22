import productapi from "../API/productapi.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

const productary = await productapi.get();
const isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
    alert("login first")
    window.location.href="pages/login.html"
}

const displayproduct = (data) => {
    const displayDiv = document.getElementById("display");
    displayDiv.innerHTML = ""; 
    data.map((product) => {
        const productElement = document.createElement("div"); 
        
        const productName = document.createElement("p");
        productName.innerHTML = product.productName; 

        const price = document.createElement("p");
        price.innerHTML = product.price;

        const image = document.createElement("img");
        image.src = product.image;

        productElement.append(productName,price,image); 
        displayDiv.appendChild(productElement); 
    });
};
displayproduct(productary)
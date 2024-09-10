import getValue from "../components/helper.js";
import Navbar from "../components/navbar.js";


document.getElementById("navbar").innerHTML = Navbar()


let login = localStorage.getItem("login") || false;
if(login == false){
    
}

let products = JSON.parse(localStorage.getItem("products")) || [];

const handleSubmit = (e) => {
    e.preventDefault();

    let product = {
        title: getValue(".productName"),
        price: getValue(".productPrice"),
        category: getValue(".productCategory"),
        img: getValue(".productImage"),
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
};

document.getElementById("productData").addEventListener("submit", handleSubmit);
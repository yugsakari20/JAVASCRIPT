import { deleteProduct, productApi } from "../API/product.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

const isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
    alert("login first bro")
    window.location.href = "/pages/login.html"
}


const productArray = await productApi.get();
console.log(productArray);


const displayProduct = (data) => {
document.getElementById("display").innerHTML = "";
data.forEach ((e) => {
    const div = document.createElement("p");

    const productName = document.createElement("p");
    const price = document.createElement("p");
    const category = document.createElement("p");
    const image = document.createElement("img");
    const remove = document.createElement("button");

    productName.innerHTML = e.productName;
    price.innerHTML = e.price;
    category.innerHTML = e.category;
    image.src = e.image;
    remove.innerHTML  = "Remove"

    remove.addEventListener("click",() => deleteProduct(e.id));

    div.append(image,productName,price,category,remove)
    document.getElementById("display").append(div);
})
}
displayProduct(productArray)
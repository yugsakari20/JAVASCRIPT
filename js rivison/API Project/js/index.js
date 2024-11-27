
import { deleteproduct, productapi } from "../API/productapi.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

const productary = await productapi.get();
const isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
    alert("login first")
    window.location.href="pages/login.html"
}

const displayproduct = (data) => {
    document.getElementById("display").innerHTML = "";
    data.forEach((e) =>{
        const div = document.createElement("div");
        const productName = document.createElement("p");
        const price = document.createElement("p");
        const image = document.createElement("img");
        const remove  = document.createElement("button");
        const change = document.createElement("change");
        
        remove.addEventListener("click",()=> deleteproduct(e.id))
        change.addEventListener("click",() => updateProducts(e))

        productName.innerHTML = e.productName;
        price.innerHTML = e.price;
        image.src = e.image;
        remove.innerHTML = "delete"
        change.innerHTML = "update"

        div.append(image,productName,price,remove)
        document.getElementById("display").append(div)

    })
}

const updateProducts = (productupdate) => {
    document.querySelector("# productName").value = productupdate.productName
    document.querySelector("# price").value = productupdate.price
    document.querySelector("# image").value = productupdate.image
    document.querySelector("# submit").value = "Update"
}

displayproduct(productary)
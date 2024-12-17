import { navbar } from "../navbar/navbar.js";

document.getElementById("navbar").innerHTML = navbar()


const displayCart = (data) => {
    document.getElementById("displayCart").innerHTML = ""
    data.map((e) => {
        const div = document.createElement("div");

        const name = document.createElement("p");
        const catagorey = document.createElement("p");
        const price = document.createElement("p");
        const image = document.createElement("img");


        name.innerHTML = e.name;
        catagorey.innerHTML = e.catagorey;
        price.innerHTML = e.price;
        image.src = e.image;

        div.append(image, name, catagorey, price);
        
    })
}
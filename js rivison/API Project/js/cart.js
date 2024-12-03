
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const displayCart = async () => {
    document.getElementById("cartDisplay").innerHTML = "";

    cartItems.forEach((item) => {
        const div = document.createElement("div");
        const productName = document.createElement("p");
        const price = document.createElement("p");
        const image = document.createElement("img");
        const remove = document.createElement("button");

      
        productName.innerHTML = item.productName;
        price.innerHTML = `$${item.price}`;
        image.src = item.image;
        remove.innerHTML = "Remove";

    
        remove.addEventListener("click", async () => {
            await cartApi.delete(id); 
            displayCart(); 
        });

        div.append(image, productName, price, remove);
        document.getElementById("cartDisplay").append(div);
    });
};

displayCart();

import navbar from "../components/navbar.js";
import { apimethod } from "../API/api.js";

document.getElementById("navbar").innerHTML = navbar();

const displayCart = async () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    const user = (await apimethod.get()).find((u) => u.id === userId);

    document.getElementById("cartDisplay").innerHTML = "";

    user.cart.forEach((item, index) => {
        const div = document.createElement("div");
        const productName = document.createElement("p");
        const price = document.createElement("p");
        const image = document.createElement("img");
        const remove = document.createElement("button");

        productName.innerText = item.productName;
        price.innerText = `$${item.price}`;
        image.src = item.image;
        remove.innerText = "Remove";

        remove.addEventListener("click", async () => {
            user.cart.splice(index, 1);
            await apimethod.patch({ cart: user.cart }, userId);
            displayCart();
        });

        div.append(image, productName, price, remove);
        document.getElementById("cartDisplay").append(div);
    });
};

displayCart();

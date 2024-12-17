import { productApi } from "../API/product.js";
import navbar from "../componets/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let userId = JSON.parse(localStorage.getItem("userId"));

const displayCart = async () => {
    let userCart = await productApi.get(`/cart/${userId}`);

    document.getElementById("cartdisplay").innerHTML = "";
    userCart.forEach((e) => {
        const div = document.createElement("div");

        const name = document.createElement("p");
        const price = document.createElement("p");
        const category = document.createElement("p");
        const image = document.createElement("img");
        const remove = document.createElement("button");

        remove.addEventListener("click", () => removeFromCart(e.id));

        name.innerHTML = e.name;
        price.innerHTML = `Price: ${e.price}`;
        category.innerHTML = `Category: ${e.category}`;
        image.src = e.image;
        remove.innerHTML = "Remove";

        div.append(image, name, price, category, remove);
        document.getElementById("cartdisplay").append(div);
    });
};

const removeFromCart = async (productId) => {
    let userCart = await productApi.get(`/cart/${userId}`);
    userCart = userCart.filter((item) => item.id !== productId);

    // Update the cart in the API
    await productApi.patch(`/cart/${userId}`, { cart: userCart });

    console.log("Updated cart:", userCart);
    displayCart();
};

displayCart();
handleLogout()

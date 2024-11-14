const cart = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (product) => {
    const result = cart.findIndex(product);

    if (result !== -1) {
        cart[result].qty++;
    } else {
        product.qty = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart)); 
    displayCart();
};

const displayCart = () => {
    const cartData = document.getElementById("cartData");
    cartData.innerHTML = ""; 

    cart.map((product, index) => {
        const div = document.createElement("div");

        const Name = document.createElement("p");
        const Price = document.createElement("p");
        const Image = document.createElement("img");
        const Quantity = document.createElement("p");
        const category = document.createElement("p");
        const remove = document.createElement("button");

        Name.innerHTML = `Name: ${product.Name}`;
        Price.innerHTML = `Price: $${product.Price}`;
        Image.src = product.Image;
        Quantity.innerHTML = `Quantity: ${product.qty}`;
        category.innerHTML = `Category: ${product.category}`;
        remove.innerHTML = "Remove";

        remove.addEventListener("click", () => removeFromCart(index));

        div.append(Image, Name, Price, Quantity, category, remove);
       cartData.append(div);
    });
};

const removeFromCart = (index) => {
    cart.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
};

displayCart()
let cart = [];
let productdata = [];

const getFormData = (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;

    const product = {
        id: Date.now(),
        title,
        price,
        image,
    };

    productdata.push(product);
    displaydata(productdata);
};

const displaydata = (data) => {
    document.getElementById("display").innerHTML = "";
    data.forEach((value, index) => {
        const div = document.createElement("div");

        const title = document.createElement("p");
        title.innerHTML = value.title;

        const price = document.createElement("p");
        price.innerHTML = `Price: $${value.price}`;

        const image = document.createElement("img");
        image.src = value.image;
        image.style.width = "100px";

        const addToCartButton = document.createElement("button");
        addToCartButton.innerHTML = "Add to cart";
        addToCartButton.addEventListener("click", () => addToCart(value));

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => deleteData(index));

        div.append(image, title, price, addToCartButton, deleteButton);
        document.getElementById("display").append(div);
    });
};

const deleteData = (index) => {
    productdata.splice(index, 1);
    displaydata(productdata);
};

const deleteDta = (index) => {
    cart.splice(index, 1);
    displayCart();
};

const addToCart = (value) => {
    const result = cart.findIndex((item) => item.id === value.id);

    if (result !== -1) {
        cart[result].qty++;
    } else {
        value.qty = 1;
        cart.push(value);
    }

    displayCart();
};

const displayCart = () => {
    document.getElementById("cart").innerHTML = "";
    cart.forEach((value, index) => {
        const div = document.createElement("div");

        const title = document.createElement("p");
        title.innerHTML = value.title;

        const price = document.createElement("p");
        price.innerHTML = `Price: $${value.price}`;

        const image = document.createElement("img");
        image.src = value.image;
        image.style.width = "100px";

        const quantity = document.createElement("p");
        quantity.innerHTML = `Quantity: ${value.qty}`;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => deleteDta(index));

        div.append(image, title, price, quantity, deleteButton);
        document.getElementById("cart").append(div);
    });
};

document.getElementById("form").addEventListener("submit", getFormData);

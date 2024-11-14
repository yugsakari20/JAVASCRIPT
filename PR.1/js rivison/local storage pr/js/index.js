const productData = JSON.parse(localStorage.getItem("productData")) || [];
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const displayData = (data) => {
    document.getElementById("data").innerHTML = "";
    data.map((e, index) => {
        const div = document.createElement("div");
        
        const Name = document.createElement("p");
        const Price = document.createElement("p");
        const Image = document.createElement("img");
        const category = document.createElement("p");
        const buy = document.createElement("button");

        Name.innerHTML = `Name:${e.Name}`;
        Price.innerHTML = `Price:${e.Price}`;
        Image.src = e.Image;
        category.innerHTML = `Category:${e.category}`;
        buy.innerHTML = "ADD TO CART";

        buy.addEventListener("click", () => addToCart(e));

        div.append(Image, Name, Price, category, buy);
        document.getElementById("data").append(div);
    });
};

const addToCart = (product) => {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
};
displayData(productData);

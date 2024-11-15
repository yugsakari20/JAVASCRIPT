const productData = JSON.parse(localStorage.getItem("productData")) || [];
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (product) => {
    const index = cart.findIndex(product);

    if (index !== -1) {
        cart[index].qty++;
    } else {
        product.qty = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
};

const filterCategory = () => {
    const categoryValue = document.getElementById('category').value.toLowerCase();

    const resultCategory = productData.filter((product) => 
        product.category.toLowerCase() === categoryValue
    );

    displayData(resultCategory);
};
document.getElementById("Filter").addEventListener("click",filterCategory)

const displayData = (data) => {
    document.getElementById("data").innerHTML = "";
    data.forEach((product) => {
        const div = document.createElement("div");

        const Name = document.createElement("p");
        const Price = document.createElement("p");
        const Image = document.createElement("img");
        const Category = document.createElement("p");
        const buy = document.createElement("button");

        Name.innerHTML = `Name: ${product.Name}`;
        Price.innerHTML = `Price: ${product.Price}`;
        Image.src = product.Image;
        Category.innerHTML = `Category: ${product.category}`;
        buy.innerHTML = "Add to Cart";

        buy.addEventListener("click", () => addToCart(product));

        div.append(Image, Name, Price, Category, buy);
        document.getElementById("data").append(div);
    });
};

displayData(productData);

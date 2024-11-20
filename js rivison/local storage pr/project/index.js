const productData = JSON.parse(localStorage.getItem("productData")) || [];

const getData = (e) => {
    e.preventDefault();

    const product = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        image: document.getElementById("image").value,
    };

    productData.push(product);
    localStorage.setItem("productData", JSON.stringify(productData));

    document.getElementById("form").reset();
    alert("Product added successfully!");
};

document.getElementById("form").addEventListener("submit", getData);

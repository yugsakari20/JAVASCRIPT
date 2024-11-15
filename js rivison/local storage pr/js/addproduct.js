const productData = JSON.parse(localStorage.getItem("productData")) || [];

const getData = (e) => {
    e.preventDefault();

    const product = {
        Name: document.getElementById("Name").value,
        Price: document.getElementById("Price").value,
        Image: document.getElementById("Image").value,
        category: document.getElementById("category").value
    };

    productData.push(product);
    localStorage.setItem("productData", JSON.stringify(productData));
    alert("Product added successfully!");
};

document.getElementById("form").addEventListener("submit", getData);

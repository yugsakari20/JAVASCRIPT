let productData = [];

const Data = async () => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  
  productData = data.products;
  products(productData); 
};


const products = (productData) => {
  document.getElementById("product_list").innerHTML = "";
  productData.map((product) => {
    let div = document.createElement("div");
    div.className = "productitem"; 

    let title = document.createElement("h3");
    title.innerHTML = product.title;

    let description = document.createElement("p");
    description.innerHTML = product.description;  

    let category = document.createElement("h5");
    category.innerHTML = `Category: ${product.category}`;

    let img = document.createElement("img");
    img.src = product.images[0]; 

    let price = document.createElement("h4");
    price.innerHTML = `Price: $${product.price}`;

    let rating = document.createElement("p");
    rating.innerHTML = `Rating: ${product.rating}`;

    let stock = document.createElement("p");
    stock.innerHTML = `Stock: ${product.stock}`;

    let discountPercentage = document.createElement("p");
    discountPercentage.innerHTML = `Discount: ${product.discountPercentage}%`;

    div.append(title, img, price, discountPercentage, rating, stock, category, description);
    document.getElementById("product_list").append(div);
  });
};


const handleSort = (orderBy) => {
  let sortedProducts;
  if (orderBy == "lth") {
    sortedProducts = [...productData].sort((a, b) => a.price - b.price);
  } else {
    sortedProducts = [...productData].sort((a, b) => b.price - a.price);
  }
  products(sortedProducts); 
};

const search = (e) => {
  e.preventDefault(); 
  let searchValue = document.getElementById("search").value.toLowerCase();
  
  let filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(searchValue)
  );

  products(filteredProducts); 
};


document.getElementById("searching").addEventListener("submit", search);
document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));

Data();

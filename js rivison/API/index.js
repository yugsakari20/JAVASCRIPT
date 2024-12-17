async function getData() {
   const req = await fetch("https://dummyjson.com/products") 
   const res = await req.json();

   displayproduct(res.products);
}



const displayproduct = (data) => {
    const displayDiv = document.getElementById("display");
    displayDiv.innerHTML = ""; 
    data.map((product) => {
        const productElement = document.createElement("div"); 
        
        const title = document.createElement("p");
        title.innerHTML = product.title; 

        const description = document.createElement("p");
        description.innerHTML = product.description;

        const category = document.createElement("p");
        category.innerHTML = product.category;

        const price = document.createElement("p");
        price.innerHTML = product.price;

        const brand = document.createElement("p");
        brand.innerHTML = product.brand;

        const images = document.createElement("img");
        images.src = product.images;


        
        productElement.append(title,description,category,price,brand,images); 
        displayDiv.appendChild(productElement); 
    });
};

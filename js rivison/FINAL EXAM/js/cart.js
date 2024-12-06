import { productApi } from "../API/product";
import navbar from "../componets/navbar";

document.getElementById("navbar").innerHTML = navbar()
const displayCart = async (data) => {
    const productary = await productApi.get();
    document.getElementById("cartdisplay").innerHTML = "";
    data.map((e) => {
        const div = document.createElement("div");

        const name = document.createElement("p");
        const price = document.createElement("p");
        const catagorey = document.createElement("p");
        const image = document.createElement("img");
        const remove = document.createElement("button");
       

        remove.addEventListener("click",() => productApi.delete(e.id))
      
    
        name.innerHTML = e.name;
        price.innerHTML = e.price;
        catagorey.innerHTML = e.catagorey;
        image.src = e.image;
        remove.innerHTML = "remove"


        div.append(image,name,price,catagorey,remove,);
        document.getElementById("display").append(div)

    })
}
displayCart(productary)

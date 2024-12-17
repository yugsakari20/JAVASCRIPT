import { deleteproduct, productApi} from "../API/product.js";
import navbar from "../componets/navbar.js";
import handleLogout from "../componets/helper.js"
import { userApi } from "../API/userapi.js";


const role = localStorage.getItem("role");

document.getElementById("navbar").innerHTML = navbar()

let isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
    alert("Login first")
    window.location.href = "/pages/login.html"

}

  
let userarray = await productApi.get()

const displayProduct = async (data) => {
    document.getElementById("display").innerHTML = "";
    data.map((e) => {
        const div = document.createElement("div");

        const name = document.createElement("p");
        const price = document.createElement("p");
        const catagorey = document.createElement("p");
        const image = document.createElement("img");
        const remove = document.createElement("button");
        const addcart = document.createElement("button");

        remove.addEventListener("click",() => deleteproduct(e.id))
        addcart.addEventListener("click",() => addtocart(e));
      
          
        name.innerHTML = e.name;
        price.innerHTML = e.price;
        catagorey.innerHTML = e.catagorey;
        image.src = e.image;
        remove.innerHTML = "remove"
        addcart.innerHTML = "addtocart"

        div.append(image,name,price,catagorey,remove,addcart);
        document.getElementById("display").append(div)

    })
}

const addtocart = async (elem) => {
    let user = JSON.parse(localStorage.getItem("userId"));
    user= await userApi.get( `/${user}`);
   console.log(user);
   


    // let existproduct = false;
    // const productary = await productApi.get();
    // productary.map((e) => {
    //     if (e.id === elem.id) {
    //         e.qty++;
    //         existproduct = true;
    //     }
    // });
    // if (!existproduct) {
    //     productary.push({...elem, qty:1})
    // }
    // await productApi.patch(`${elem.id}`, {qty: elem.qty + 1});
    // console.log(productary);
    
};

displayProduct(userarray)
handleLogout()
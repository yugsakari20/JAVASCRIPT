import Navbar from "../components/navbar.js";


document.getElementById("navbar").innerHTML = Navbar()

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const remove = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    mapper(cart);
};

const handleQty = (operation, index) => {
    if (operation === "+") {
        cart[index].qty += 1;
    } else {
        if (cart[index].qty > 1) {
            cart[index].qty -= 1;
        } else {
            remove(index);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    mapper(cart);
};

const mapper = (cart) => {
    document.getElementById("cartItem").innerHTML = "";
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item, i) => {
        let tr = document.createElement("tr");

        // Image Column
        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = item.img;
        img.classList.add("cart-img");
        td1.appendChild(img);

        // Title Column
        let td2 = document.createElement("td");
        td2.textContent = item.title;

        // Quantity Column
        let td3 = document.createElement("td");
        let btn1 = document.createElement("button");
        btn1.textContent = "-";
        btn1.classList.add("btn", "btn-warning", "btn-sm");
        let btn2 = document.createElement("span");
        btn2.textContent = item.qty;
        btn2.style.margin = "0 10px";
        let btn3 = document.createElement("button");
        btn3.textContent = "+";
        btn3.classList.add("btn", "btn-success", "btn-sm");

        btn1.addEventListener("click", () => handleQty("-", i));
        btn3.addEventListener("click", () => handleQty("+", i));
        td3.appendChild(btn1);
        td3.appendChild(btn2);
        td3.appendChild(btn3);

        // Price Column
        let td4 = document.createElement("td");
        td4.textContent = `₹${item.price}`;

        // Total Price Column
        let td5 = document.createElement("td");
        td5.textContent = `₹${item.price * item.qty}`;

        // Remove Column
        let td6 = document.createElement("td");
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("btn", "btn-danger", "btn-sm");
        removeBtn.addEventListener("click", () => remove(i));
        td6.appendChild(removeBtn);

        // Append all columns to the row
        tr.append(td1, td2, td3, td4, td5, td6);
        document.getElementById("cartItem").appendChild(tr);

    
        totalPrice += item.price * item.qty;
        totalItems += item.qty;
    });

    document.getElementById("totalPrice").textContent = totalPrice;
    document.getElementById("totalItems").textContent = totalItems;
};


const proceedToCheckout = () => {
    alert("Proceeding to checkout...");

};

mapper(cart);

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const displayCart = () => {
    const cartData = document.getElementById("cartData");
    cartData.innerHTML = "";

    cart.forEach((product, index) => {
        const div = document.createElement("div");

        const Name = document.createElement("p");
        const Price = document.createElement("p");
        const Image = document.createElement("img");
        const Quantity = document.createElement("p");
        const Category = document.createElement("p");
        const remove = document.createElement("button");

        const incrementQty = document.createElement("button");
        const decrementQty = document.createElement("button");

        Name.innerHTML = `Name: ${product.Name}`;
        Price.innerHTML = `Price: ${product.Price}`;
        Image.src = product.Image;
        Quantity.innerHTML = `Quantity: ${product.qty}`;
        Category.innerHTML = `Category: ${product.category}`;
        remove.innerHTML = "Remove";

        incrementQty.innerHTML = "+";
        decrementQty.innerHTML = "-";

        incrementQty.addEventListener("click", () => {
            product.qty++;
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
        });

        decrementQty.addEventListener("click", () => {
            if (product.qty > 1) {
                product.qty--;
            } else {
                cart.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
        });

        remove.addEventListener("click", () => removeFromCart(index));

        div.append(Image, Name, Price, Quantity, incrementQty, decrementQty, Category, remove);
        cartData.append(div);
    });

    displayBill();
};

const displayBill = () => {
    const totalBillElement = document.getElementById("totalBill");
    const gstElement = document.getElementById("gst");
    const grandTotalElement = document.getElementById("grandTotal");

    let totalBill = 0;

    cart.forEach((product) => {
        totalBill += product.Price * product.qty;
    });

    const gst = totalBill * 0.18;
    const grandTotal = totalBill + gst;
    totalBillElement.innerHTML = `Total Bill: ${totalBill}`;
    gstElement.innerHTML = `GST (18%): ${gst}`;
    grandTotalElement.innerHTML = `Grand Total: ${grandTotal}`;
};

const removeFromCart = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
};

displayCart();

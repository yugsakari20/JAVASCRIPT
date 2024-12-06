const navbar = () => {
    const role = localStorage.getItem("role");

    return `
    <nav>
        <a href="/index.html">Home</a>
        <a href="/pages/signup.html">Signup</a>
        <a href="/pages/login.html">Login</a>
        <a href="/pages/cart.html">Cart</a>
        ${role === "admin" ? '<a href="/pages/addproduct.html">Add Product</a>' : ""}
    </nav>`;
};

export default navbar;

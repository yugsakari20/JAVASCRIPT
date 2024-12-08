const navbar = () => {
    const role = localStorage.getItem("role");
    const isLogin = localStorage.getItem("isLogin");

    return `
    <nav id="navbar">
        <a href="/index.html">Home</a>
        ${isLogin !== "true"  ?`<a href="/pages/signup.html">Signup</a>` : ""}
        ${isLogin !== "true" ? '<a href="/pages/login.html">Login</a>' : ""}
        <a href="/pages/cart.html">Cart</a>
        ${role === "admin" ? '<a href="/pages/addproduct.html">Add Product</a>' : ""}
        ${isLogin === "true" ? '<button id="logout-btn">Logout</button>' : ""}
    </nav>`;
};

export default navbar;



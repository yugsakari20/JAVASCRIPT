const navbar = () => {
  const isLogin = localStorage.getItem("isLogin");
  return `<nav class="navbar">
    <div class="container">
      <a href="#" class="logo">Bootdey.com</a>
      <ul class="nav-links">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/pages/addproduct.html">Add Product</a></li>
        <li><a href="/pages/profile.html">profile</a></li>
        <li><a href="/pages/cart.html">Cart</a></li>
        ${isLogin ? 
          `<li><a href="#" id="Logout">Logout</a></li>` :
          `<li><a href="/pages/login.html">Login</a></li>
           <li><a href="/pages/signup.html">Signup</a></li>`}
      </ul>
    </div>
  </nav>`;
};

export default navbar;
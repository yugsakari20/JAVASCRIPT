const Navbar = () => {
  const isLogin = localStorage.getItem("isLogin");
  const username = localStorage.getItem("username");

  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container">
        <!-- logo -->
        <a class="navbar-brand fs-4" href="#"><img src="/project/img/ajio-logo-white (1).jpeg" alt=""></a>
        <!-- toggle button -->
        <button
          class="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="sidebar offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page" href="/project/index.html">Home</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#services">Services</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/project/pages/cart.html">Cart</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/project/pages/addproduct.html">Add Product</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/project/pages/product.html">Product</a>
              </li>
            </ul>

            <!-- login/sign up or logout -->
            <div class="d-flex justify-content-center align-items-center gap-3">
              ${
                isLogin
                  ? `<span class="text-white">Welcome, ${username}</span>
                     <button id="logoutBtn" class="text-white text-decoration-none px-3 py-1  btn btn-primary rounded-4">Logout</button>`
                  : `<a href="/project/pages/login.html" class="text-white text-decoration-none px-3 py-1 bg-primary rounded-4">Login</a>
                     <a href="/project/pages/signup.html" class="text-white text-decoration-none px-3 py-1 bg-primary rounded-4">Sign Up</a>`
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;
};

export default Navbar;

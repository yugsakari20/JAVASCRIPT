const Navbar = () => {
  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container">
        <!-- logo -->
        <a class="navbar-brand fs-4" href="#">Logo</a>
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
                <a class="nav-link active" aria-current="page" href="#">Home</a>
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
                <a class="nav-link" href="/pages/cart.html">cart</a>
              </li>
                <li class="nav-item mx-2">
                <a class="nav-link" href="/pages/addproduct.html">add product</a>
              </li>
                <li class="nav-item mx-2">
                <a class="nav-link" href="/pages/product.html">product</a>
              </li>
            </ul>
            <!-- login/sign up -->
            <div class="d-flex justify-content-center align-items-center gap-3">
              <a href="/pages/login.html" class="text-white text-decoration-none px-3 py-1 bg-primary rounded-4">Login</a>
              <a href="/pages/signup.html" class="text-white text-decoration-none px-3 py-1 bg-primary rounded-4">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;
};

export default Navbar;

const Navbar = () => {
    const isLogin = localStorage.getItem("isLogin");
    return`  <nav>
    <div class="logo">My Website</div>
    <ul class="nav-links">
      <li><a href="./index.html">Home</a></li>
      ${isLogin ?
        `<li><a href="#" id="Logout">Logout</a></li>` :
      `<li><a href="/page/login.html">Login</a></li>
      <li><a href="/page/signup.html">Signup</a></li>`
    }
    </ul>
  </nav>`;
};



export {Navbar}
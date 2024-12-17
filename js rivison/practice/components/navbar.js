const navbar = () =>{
return`  <header class="header">
        <nav class="navbar">
            <a href="#" class="nav-logo">CuriousAman</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="/index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="/pages/addproduct.html" class="nav-link">addproduct</a>
                </li>
                <li class="nav-item">
                    <a href="/pages/login.html" class="nav-link">login</a>
                </li>
                <li class="nav-item">
                    <a href="/pages/signup.html" class="nav-link">signup</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
`
}

export default navbar;
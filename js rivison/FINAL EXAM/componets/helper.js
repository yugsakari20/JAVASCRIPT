const handleLogout = () => {
    const logout = document.getElementById("logout-btn");

    logout?.addEventListener("click",() => {
    localStorage.removeItem("role");
    localStorage.removeItem("isLogin");
    alert("You have been logged out.");
    window.location.href = "/index.html"; 
});
};


export default handleLogout

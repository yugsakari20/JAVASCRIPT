const Logout = () => {
    const logoutBtn = document.getElementById("Logout");

    logoutBtn?.addEventListener("click",() => {
        localStorage.removeItem("isLogin");
        window.location.reload();
    });
};

export{Logout}
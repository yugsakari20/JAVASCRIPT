const Logout = () => {
    const logoutBtn = document.getElementById("Logout");
    console.log();
    
    logoutBtn?.addEventListener("click", () => {
      localStorage.removeItem("isLogin");
      window.location.reload();
    });
  };

  export {Logout}
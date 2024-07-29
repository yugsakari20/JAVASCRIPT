const handledata = (e) => {
    e.preventDefault();
  
    let data = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      password: document.getElementById("password").value,
    };
  
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let numberRegex = /^[6789]\d{9}$/;
  
    if (data.username.length < 2) {
      alert("Username should be at least 2 characters long");
      return;
    }
    if (!numberRegex.test(data.number)) {
      alert("Phone number should be 10 digits long and start with 6, 7, 8, or 9");
      return;
    }
    if (!passwordRegex.test(data.password)) {
      alert("Password should be notvalid");
      return;
    }
  
    console.log(data);
  };
  
  document.getElementById("userdata").addEventListener("submit", handledata);
  
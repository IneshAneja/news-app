
    function addUser(){
        user = document.getElementById("user_name").value;
          localStorage.setItem("user_name", user);
          window.location = "gategorypage.html";
      }

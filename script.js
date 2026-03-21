// Splash
setTimeout(()=>{
  document.getElementById("splash").style.display="none";
  document.getElementById("main").style.display="block";
},2000);

// Role
function selectRole(role){
  alert(role);
}

// Navigation
function openAdmin(){
  document.getElementById("main").style.display="none";
  document.getElementById("adminPage").classList.add("active-page");
}

function goBack(){
  document.getElementById("adminPage").classList.remove("active-page");
  document.getElementById("main").style.display="block";
}

function openRegister(){
  document.getElementById("adminPage").classList.remove("active-page");
  document.getElementById("registerPage").classList.add("active-page");
}

function backToLogin(){
  document.getElementById("registerPage").classList.remove("active-page");
  document.getElementById("adminPage").classList.add("active-page");
}

// Actions
function login(){
  alert("Logged in");
}

function register(){
  alert("Registered");
}

// Toggle Password
function togglePassword(id){
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

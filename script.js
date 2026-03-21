// Splash
setTimeout(()=>{
  document.getElementById("splash").style.display="none";
  document.getElementById("main").style.display="block";
},2000);

// Student
function selectRole(role){
  alert(role);
}

// Open Admin
function openAdmin(){
  document.getElementById("main").style.display="none";
  document.getElementById("adminPage").style.display="flex";
}

// Back to Role
function goBack(){
  document.getElementById("adminPage").style.display="none";
  document.getElementById("main").style.display="block";
}

// Open Register
function openRegister(){
  document.getElementById("adminPage").style.display="none";
  document.getElementById("registerPage").style.display="flex";
}

// Back to Login
function backToLogin(){
  document.getElementById("registerPage").style.display="none";
  document.getElementById("adminPage").style.display="flex";
}

// Login
function login(){
  alert("Logged in");
}

// Register
function register(){
  alert("Registered");
}

// Toggle Password
function togglePassword(id){
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

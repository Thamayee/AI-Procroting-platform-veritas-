// Splash → Main
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("main").style.display = "block";
}, 2000);

// Student button
function selectRole(role) {
  alert(role + " Selected");
}

// Open Admin Page
function openAdmin() {
  document.getElementById("main").style.display = "none";
  document.getElementById("adminPage").style.display = "flex";
}

// Back button
function goBack() {
  document.getElementById("adminPage").style.display = "none";
  document.getElementById("main").style.display = "block";
}

// Login
function login() {
  alert("Admin Logged In");
}

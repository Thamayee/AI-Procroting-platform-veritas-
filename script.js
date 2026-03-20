const splash = document.getElementById("splash");
const main = document.getElementById("main");

// After 2 sec → fade splash → show main
setTimeout(() => {
  splash.classList.add("fade-out");

  setTimeout(() => {
    splash.style.display = "none";
    main.style.display = "block";
  }, 800); // match fadeOut duration
}, 2000);

// Button click
function selectRole(role) {
  alert(role + " Selected");
}

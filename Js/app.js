// function ShowHide(x) {
//     x.classList.toggle("change");
//     var menu = document.getElementById("nav-list");
//     if (menu.style.display === "block") {
//       menu.style.display = "none";
//     } else {
//       menu.style.display = "block";
//     }
//   }

function toggleMenu(burger) {
  burger.classList.toggle("change");
  document.querySelector(".nav-list").classList.toggle("show-nav");
}
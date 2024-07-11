function ShowHide(x) {
    x.classList.toggle("change");
    var menu = document.getElementById("nav-list");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
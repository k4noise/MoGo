function toggleMenu() {
  let button = document.querySelector(".header__wrapper-nav-button"),
    navigation = document.querySelector(".header__wrapper-nav");
  button.classList.toggle("header__wrapper-nav-button-open");
  button.classList.toggle("header__wrapper-nav-button-close");
  button.innerHTML = "2";
  if (button.classList.contains("header__wrapper-nav-button-close")) {
    button.innerHTML = "&#128938;";
    navigation.style.display = "grid";
  } else {
    button.innerHTML = "&#8801;";
    navigation.style.display = "none";
  }
}

document.querySelector(".header__wrapper-nav-button").onclick = toggleMenu;

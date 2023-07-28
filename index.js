const links = document.querySelectorAll("nav li");

menuBurger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});

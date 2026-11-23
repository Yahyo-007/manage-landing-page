const menuButton = document.getElementById("hamburger");

menuButton.addEventListener("click", () => {
  const mobileNav = document.getElementById("mobile-nav");
  
  menuButton.classList.toggle("open");

  mobileNav.classList.toggle("active");
});

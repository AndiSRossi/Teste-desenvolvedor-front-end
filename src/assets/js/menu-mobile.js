document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menuList = document.querySelector(".menu-content ul");
  const dropdownSubmenu = document.querySelector(".dropdown-submenu");

  toggle.addEventListener("click", () => {
    menuList.classList.toggle("show");
  });

  dropdownSubmenu.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownSubmenu.classList.toggle("open");
  });

  menuList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (e.target.id === "botao-tema") return;

      menuList.classList.remove("show");
      dropdownSubmenu.classList.remove("open");
    });
  });
});

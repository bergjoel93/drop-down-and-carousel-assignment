import "./styles/style.css";
/**
 * A simple hamburger button that has a dropdown menu that appears when you click it. This module is meant to be re-usable.
 */

export default class HamburgerMenu {
  constructor(elementId) {
    this.elementId = elementId;
    this.createMenu();
  }

  createMenu() {
    const element = document.getElementById(this.elementId);

    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");
    dropdownMenu.innerHTML = `
        <div class="hamburger" id="hamburger">
          <span class="material-symbols-outlined"> menu </span>
        </div>
        <div class="menu-container">
          <div class="menu-pointer"><div class="triangle"></div></div>
          <div class="menu-container-2">
            <div class="menu-item"><a href="#">Home</a></div>
            <div class="menu-item"><a href="#">About</a></div>
            <div class="menu-item"><a href="#">Contact</a></div>
            <div class="menu-item"><a href="#">Careers</a></div>
            <div class="menu-item"><a href="#">FAQ</a></div>
          </div>
        </div>
    `;

    element.appendChild(dropdownMenu);

    this.handle();
  }

  handle() {
    const hamburger = document.querySelector("#hamburger");
    const menu = document.querySelector(".menu-container");

    let toggleMenu = false;

    hamburger.addEventListener("click", () => {
      if (!toggleMenu) {
        menu.style.display = "block";
        toggleMenu = true;
      } else {
        menu.style.display = "none";
        toggleMenu = false;
      }
    });
  }
}

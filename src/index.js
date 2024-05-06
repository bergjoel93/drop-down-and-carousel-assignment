import HamburgerMenu from "./hamburger-dropdown";
import PictureCarousel from "./picture-carousel";

export { HamburgerMenu, PictureCarousel };

new HamburgerMenu("nav");

const buttons = document.querySelectorAll("[data-carousel-button]"); // using a data attribute instead of a class or idea.

const navDots = document.querySelectorAll(".carousel-nav-dot"); // select nav dots

// get an array of the values to inject as image url.

let positionIndex = 0;
const positions = [0, -700, -1400, -2100, -2800, -3500, -4200, -4900]; // pixel positions of picture frame.

// select carousel
const carousel = document.querySelector(".carousel-container");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let offset;

    if (button.getAttribute("data-carousel-button") === "next") {
      offset = 1;
    }
    if (button.getAttribute("data-carousel-button") === "prev") {
      offset = -1;
    }
    positionIndex += offset;

    if (positionIndex < 0) positionIndex = 7;
    if (positionIndex > 7) positionIndex = 0;

    changeImage(positionIndex);
  });
});

// now handle the nav dot when one is clicked.
navDots.forEach((navDot) => {
  navDot.addEventListener("click", () => {
    positionIndex = Number(navDot.getAttribute("data-id"));
    changeImage(positionIndex);
  });
});

// Call this function to change the image
/**
 * To change the position, the picture-frame div simply moves -700 px to the left. It keeps track of the number of images within the picture-frame, and can't reset once it gets to the end.
 *
 */
function changeImage(positionIndex) {
  if (positionIndex >= 0 && positionIndex < 8) {
    const pictureFrame = document.querySelector(".picture-frame");
    pictureFrame.style.left = `${positions[positionIndex]}px`;
    updateNavDot(positionIndex);
  } else {
    console.error("Problem with index position:", positionIndex);
  }

  function updateNavDot(positionIndex) {
    // remove all active
    navDots.forEach((navDot) => {
      navDot.classList.remove("active"); // removes all active.
      if (Number(navDot.getAttribute("data-id")) === positionIndex) {
        setTimeout(() => {
          // delays the time a bit so the transition and nav dot sync up betteer.
          navDot.classList.add("active");
        }, 500);
      }
    });
  }
}

// Import images
const images = [];
for (let i = 1; i <= 8; i++) {
  images.push(require(`./assets/${i}.jpg`));
}
/**
 * A simple picture carousel, must use an element ID so that the program knows what to append the carousel to.
 */

export default class PictureCarousel {
  constructor(elementId) {
    this.container = document.getElementById(elementId);
    this.images = images;
    this.currentImageIndex = 0;
  }

  create() {}

  handle() {}
}

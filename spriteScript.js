// Function to change bottle img depending on sprite bottle.
function spriteSlider(bottle) {
  document.querySelector('.sprite-bottle').src = bottle;
}
// Changing the background of selected bottle.
function thirstBackground(color) {
  const sec = document.querySelector('.green-b-grid');
  sec.style.background = color;
}
// function to grab the special background depending on the type of chosen sprite bottle.
function backgroundIndex(url) {
  //will be changing this sections BG
  const bgStyle = document.querySelector('.green-b-grid');
  // whatever parameter inserted will give us the relative url(/images/...)
  //I.E: backgroundIndex(images/mobile_sprite_logo_nav.png)
  bgStyle.style.backgroundImage = `url(${url})`;
}


// code to make the carousel buttons work.
//1st grabbing the carousel. Then looping throug all carousel( only1 our case) 
document.querySelectorAll(".image-carousel").forEach(carousel => {
  //and saving each image to obj images.
  const images = carousel.querySelectorAll(".carousel_img");
  //we are using a static method to create an array with all of our images in it.
  const buttonsHTML = Array.from(images, () => {
    // and here we will dynamically create a button for each image.
    return `<span class="carousel_button"></span>`;
  });
  // We need to insert our above buttons into our html document.
  // join() is joining all carousel buttons. It will dynamically create according to how many img there may be.
  carousel.insertAdjacentHTML("beforeend",
  `
  <div class="carousel_nav">
    ${buttonsHTML.join("")}
  </div>
  `);

  //We need to activate the buttons. 1st we are selecting all inserted buttons.
  const buttons = carousel.querySelectorAll(".carousel_button");
  // now buttons are objects and we'll be able to add click eventListeners.
  // looping and saving the button and it's ith index.
  buttons.forEach((button,i) => {
    //when user clicks:
    button.addEventListener("click", () => {
      // We are "un-selecting" (with classList.remove) every image in the array
      // Likewise for the buttons.
      images.forEach(image => image.classList.remove("carousel_img-slct"));
      buttons.forEach(button => button.classList.remove("caro_btn-slct"));

      // Now Selecting the correct image based on their index.
      images[i].classList.add("carousel_img-slct");
      // this is adding the visual feedback when selected.
      button.classList.add("caro_btn-slct");
    });
  });
  // Upon page load up we will have image at the first index be chosen.
  images[0].classList.add("carousel_img-slct");
  buttons[0].classList.add("caro_btn-slct");
});
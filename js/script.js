//Global vars
const thumbs = document.querySelectorAll(".albums img");
let widthImg;

//Main function resizing img to responsive squares
function thumbResizer() {
  for (let i = 0; i < thumbs.length; i++) {
    widthImg = thumbs[0].clientWidth;
    thumbs[i].style.height = widthImg + "px";
  }
}

//Event Listeners
window.addEventListener("load", thumbResizer);
window.addEventListener("resize", thumbResizer);
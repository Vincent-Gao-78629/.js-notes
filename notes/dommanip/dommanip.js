const button = document.querySelector(".button");
const box = document.querySelector(".box");
function makergb(event) {
  /*   console.log(event);
  console.log(event.target); */
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
button.addEventListener("click", makergb);

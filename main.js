//you can do it much easier using hsl
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const div = document.querySelector("div");


let red = 255;
let green = 0;
let blue = 0;

let red2 = 0;
let green2 = 255;
let blue2 = 255;

const html = (red, green, blue) => {
  const color = "rgb(" + red + ',' + green + ',' + blue + ')';
  h1.innerHTML = color;
  h1.style.color = color;
  div.style.borderColor = color;
  div.style.boxShadow = "0 0 200px 40px " + color;

};

const reset = () => {
  red = 255;
  green = 0;
  blue = 0;
  red2 = 0;
  green2 = 255;
  blue2 = 255;
}

const changeColor = () => {
  if (green < 255) {
    green++
    html(red, green, blue);
  }

  if (green == 255 && red > 0) {
    red--
    html(red, green, blue);
  }

  if (red == 0 && blue < 255) {
    blue++
    html(red, green, blue);
  }
  if (blue === 255 && green2 > 0) {
    green2--

    html(red2, green2, blue2);
  }
  if (red2 < 255 && green2 === 0) {
    red2++
    html(red2, green2, blue2);
  }
  if (red2 == 255 && blue2 > 0) {
    blue2--
    html(red2, green2, blue2);
  }

  if (blue2 === 0) {
    reset();
  }

  setTimeout(changeColor, 20);
}


changeColor();
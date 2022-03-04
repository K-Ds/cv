// Variables
const name = document.getElementById("name");

const colorPicker = () => {
  // Algorithm from css-tricks.com
  let randomColor;

  do {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
  } while (randomColor == "#ffffff");

  return "#" + randomColor;
};

name.addEventListener("click", () => {
  const randomColor = colorPicker();

  document.documentElement.style.setProperty("--color-primary", randomColor);
});

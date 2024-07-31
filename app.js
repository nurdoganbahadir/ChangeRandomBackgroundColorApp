const bgcolor = document.querySelector(".bgDiv");
const copy = document.querySelector("#copy");
const colorInput = document.querySelector("#colorInput");
const colorText = document.querySelector("#colorText");
const clickBtn = document.querySelector(".btn-click");
const overBtn = document.querySelector(".btn-over");

clickBtn.addEventListener("click", getRandomColorHex);
overBtn.addEventListener("mouseover", getRandomColorHex);
colorInput.addEventListener("input", colorInputValue);

function getRandomColorHex(e) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = `#${randomColor.padStart(6, "0")}`;

  bgcolor.style.backgroundColor = color;
  colorText.textContent = color;
  colorInput.value = color;
}
function colorInputValue() {
  const color = colorInput.value;
  bgcolor.style.backgroundColor = color;
  colorText.textContent = color;
}

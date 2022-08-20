const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const colors = [
  "#e55555",
  "##16eb47",
  "rgb(77, 251, 225)",
  "rgb(117, 67, 225)",
  "#6e2cd7",
  "rgb(223, 255, 66)",
  "#1c60ff",
  "#da5df3",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

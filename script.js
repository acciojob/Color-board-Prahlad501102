const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const colors = [
  "#e74c3c", "#8e44ad", "#3498db",
  "#e67e22", "#2ecc71", "#f1c40f"
];

for (let i = 0; i < 800; i++) {
  const square = document.createElement("div");
  square.className = "square";

  square.addEventListener("mouseenter", () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = color;
  });

  square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = "#1d1d1d";
  });

  container.appendChild(square);
}

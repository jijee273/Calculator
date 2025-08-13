// Prompt calculator logic
let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));
let op = prompt("Enter the operator ");
let result;

if (op === "+") {
  result = a + b;
} else if (op === "-") {
  result = a - b;
} else if (op === "*") {
  result = a * b;
} else if (op === "/") {
  result = b !== 0 ? a / b : "Cannot divide by zero";
} else {
  result = "Invalid operator";
}

document.getElementById("output").textContent = "❤️ Result is: " + result;

// Floating heart animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";

  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 500);

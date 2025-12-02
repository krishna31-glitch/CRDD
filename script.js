// Surprise heart animation
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    document.querySelector(".card").appendChild(heart);

    // Random heart position
    heart.style.left = Math.random() * 300 + "px";
    heart.style.top = "300px";

    // Remove after animation
    setTimeout(() => heart.remove(), 3000);
  }
});

// Toggle card content
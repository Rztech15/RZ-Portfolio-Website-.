console.log("Portfolio Loaded - Muhammad Ramzan 🚀");

// Smooth simple animation effect
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 20px #4da3ff";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
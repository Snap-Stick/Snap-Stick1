// Simple Add to Cart hover alert
const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Added to cart!");
  });
});

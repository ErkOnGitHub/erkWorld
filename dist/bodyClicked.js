function bodyClicked() {
  if (cards.every(card => card.classList.contains("found"))) {
    window.location.href = "index.html";
  }
}

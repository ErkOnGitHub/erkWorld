function checkForPair(firstCard, secondCard) {
  if (firstCard.firstChild.src === secondCard.firstChild.src) {
    cards.forEach(card => card.removeAttribute("onclick"));
    setTimeout(markCardsAsFound, 1000);
    setTimeout(activateCards, 2000);
    clickCount = 0;
  }
}

function markCardsAsFound() {
  firstCard.classList.add("found");
  secondCard.classList.add("found");
  // cards.forEach(card => card.setAttribute("onclick", "handleClick(event)"));
  checkForGameOver();
}

function checkForGameOver() {
  if (cards.every(card => card.classList.contains("found"))) {
    cards.forEach(card => card.classList.add("gameOver"));
  }
}

function activateCards() {
  cards.forEach(card => card.setAttribute("onclick", "handleClick(event)"));
}

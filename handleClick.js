function handleClick(event) {
  clickCount++;
  switch (clickCount) {
    case 1:
      if (event.target.classList.contains("found")) {
        clickCount--;
        break;
      } else {
        firstCard = event.target;
        firstCard.classList.toggle("flipped");
        break;
      }
    case 2:
      if (
        event.target === firstCard ||
        event.target.classList.contains("found")
      ) {
        clickCount--;
        break;
      } else {
        secondCard = event.target;
        secondCard.classList.toggle("flipped");
        checkForPair(firstCard, secondCard);
        break;
      }
    case 3:
      if (!firstCard.classList.contains("found"))
        firstCard.classList.toggle("flipped");
      if (!secondCard.classList.contains("found"))
        secondCard.classList.toggle("flipped");
      clickCount = 0;
  }
}

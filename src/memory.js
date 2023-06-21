class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    } else {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  }
  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }

    return false;
  }

  checkIfFinished() {
    // ... write your code here
    const totalPairs = this.cards.length / 2;
    this.pairsGuessed === totalPairs ? true : false;
  }
}

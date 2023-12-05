class CardLib {
  private deck: string[] = ["2 of hearts", "3 of hearts", "4 of hearts", "5 of hearts", "6 of hearts", "7 of hearts", "8 of hearts", "9 of hearts", "10 of hearts", "Jack of hearts", "Queen of hearts", "King of hearts", "Ace of hearts", "2 of diamonds", "3 of diamonds", "4 of diamonds", "5 of diamonds", "6 of diamonds", "7 of diamonds", "8 of diamonds", "9 of diamonds", "10 of diamonds", "Jack of diamonds", "Queen of diamonds", "King of diamonds", "Ace of diamonds", "2 of spades", "3 of spades", "4 of spades", "5 of spades", "6 of spades", "7 of spades", "8 of spades", "9 of spades", "10 of spades", "Jack of spades", "Queen of spades", "King of spades", "Ace of spades", "2 of clubs", "3 of clubs", "4 of clubs", "5 of clubs", "6 of clubs", "7 of clubs", "8 of clubs", "9 of clubs", "10 of clubs", "Jack of clubs", "Queen of clubs", "King of clubs", "Ace of clubs"];
  private drawnCards = new Array<number>()
  private exportDrawnCards = new Array<string>()
  private temp: any;
  private numCardsDrawn = 0;
  private shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  constructor() {
    this.deck = this.shuffle(this.deck);
  }
  public drawCard() {
    this.temp = this.getRandomIntExcludingExistingNumbers(0, 51, this.drawnCards);
    if (this.drawnCards.length == 52) {
      return "no cards left in deck"
    }
    else {
      this.drawnCards[this.numCardsDrawn] = this.temp;
      this.exportDrawnCards[this.numCardsDrawn] = this.deck[this.temp];
      this.numCardsDrawn++;
      return this.deck[this.temp]
    }

  }
  public shuffleNew() {
    this.numCardsDrawn = 0;
    this.drawnCards.length = 0;
  }
  private getRandomInt(min: any, max: any) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }


  private getRandomIntExcludingExistingNumbers(min: any, max: any, excludeArrayNumbers: any[]) {
    let randomNumber;

    if (!Array.isArray(excludeArrayNumbers)) {
      randomNumber = this.getRandomInt(min, max);
      return randomNumber;
    }

    do {
      randomNumber = this.getRandomInt(min, max);
    } while ((excludeArrayNumbers || []).indexOf(randomNumber) > -1);

    return randomNumber;
  }

};
class CardLibInfo extends CardLib {
  constructor() {
    super();
  }
  test(){
    alert('test');
  }
}

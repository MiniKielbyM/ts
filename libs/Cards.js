var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CardLib = /** @class */ (function () {
    function CardLib() {
        this.deck = ["2 of hearts", "3 of hearts", "4 of hearts", "5 of hearts", "6 of hearts", "7 of hearts", "8 of hearts", "9 of hearts", "10 of hearts", "Jack of hearts", "Queen of hearts", "King of hearts", "Ace of hearts", "2 of diamonds", "3 of diamonds", "4 of diamonds", "5 of diamonds", "6 of diamonds", "7 of diamonds", "8 of diamonds", "9 of diamonds", "10 of diamonds", "Jack of diamonds", "Queen of diamonds", "King of diamonds", "Ace of diamonds", "2 of spades", "3 of spades", "4 of spades", "5 of spades", "6 of spades", "7 of spades", "8 of spades", "9 of spades", "10 of spades", "Jack of spades", "Queen of spades", "King of spades", "Ace of spades", "2 of clubs", "3 of clubs", "4 of clubs", "5 of clubs", "6 of clubs", "7 of clubs", "8 of clubs", "9 of clubs", "10 of clubs", "Jack of clubs", "Queen of clubs", "King of clubs", "Ace of clubs"];
        this.drawnCards = new Array();
        this.exportDrawnCards = new Array();
        this.numCardsDrawn = 0;
        this.deck = this.shuffle(this.deck);
    }
    CardLib.prototype.shuffle = function (array) {
        var _a;
        var currentIndex = array.length, randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            _a = [
                array[randomIndex], array[currentIndex]
            ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
        }
        return array;
    };
    CardLib.prototype.drawCard = function () {
        this.temp = this.getRandomIntExcludingExistingNumbers(0, 51, this.drawnCards);
        if (this.drawnCards.length == 52) {
            return "no cards left in deck";
        }
        else {
            this.drawnCards[this.numCardsDrawn] = this.temp;
            this.exportDrawnCards[this.numCardsDrawn] = this.deck[this.temp];
            this.numCardsDrawn++;
            return this.deck[this.temp];
        }
    };
    CardLib.prototype.shuffleNew = function () {
        this.numCardsDrawn = 0;
        this.drawnCards.length = 0;
    };
    CardLib.prototype.getRandomInt = function (min, max) {
        var minimum = Math.ceil(min);
        var maximum = Math.floor(max);
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    };
    CardLib.prototype.getRandomIntExcludingExistingNumbers = function (min, max, excludeArrayNumbers) {
        var randomNumber;
        if (!Array.isArray(excludeArrayNumbers)) {
            randomNumber = this.getRandomInt(min, max);
            return randomNumber;
        }
        do {
            randomNumber = this.getRandomInt(min, max);
        } while ((excludeArrayNumbers || []).indexOf(randomNumber) > -1);
        return randomNumber;
    };
    return CardLib;
}());
;
var CardLibInfo = /** @class */ (function (_super) {
    __extends(CardLibInfo, _super);
    function CardLibInfo() {
        return _super.call(this) || this;
    }
    CardLibInfo.prototype.test = function () {
        alert('test');
    };
    return CardLibInfo;
}(CardLib));

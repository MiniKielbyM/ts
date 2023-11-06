var CardLib = /** @class */ (function () {
    function CardLib() {
        this.deck = ["2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "Jh", "Qh", "Kh", "Ah", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "Jd", "Qd", "Kd", "Ad", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "Js", "Qs", "Ks", "As", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "Jc", "Qc", "Kc", "Ac"];
        this.drawnCards = new Array();
        this.numCardsDrawn = 0;
        this.info = /** @class */ (function () {
            function class_1() {
            }
            class_1.prototype.cardsDrawn = function () {
                console.log(test());
            };
            return class_1;
        }());
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
            console.log(this.drawnCards);
            this.numCardsDrawn++;
            return this.deck[this.temp];
        }
    };
    CardLib.prototype.shuffleNew = function () {
        this.numCardsDrawn = 0;
        this.drawnCards.length = 0;
        console.log(this.drawnCards);
    };
    CardLib.test = function () {
        return "test";
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

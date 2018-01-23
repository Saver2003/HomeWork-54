//
// export const getCombination = cards => {
//     const suits = cards.map(c => c.suit);
//     const ranks = cards.map(c => c.rank);
//
//     const flash = suits.every(s => suits[0] === s);
//
//     if (flash && ranks.includes('10') && ranks.includes('A') &&
//         ranks.includes('K') && ranks.includes('Q') && ranks.includes('J')) {
//         return 'Royal Flaush'
//     } else if (flash && ranks.includes('2') && ranks.includes('3')
//         && ranks.includes('4') && ranks.includes('5') && ranks.includes('6')) {
//         return 'Straight flush'
//     } else if (flash && ranks.value.include(2)) {
//         return 'A pair'
//     }
// };

export const OUTCOMES = {
    ROYAL_FLUSH: 'Royal Flush',
    FLUSH: 'Flush',
    PAIR: 'A Pair',
    STRAIGHTFLUSH: 'Straight Flush',
    FOUROFAKIND: 'Four Of A Kind',
    FULLHOUSE: 'Full House',
    NOTHING: 'Nothing'
};

class CardCombination {
    constructor(cards) {
        this.cards = cards;

        this.suits = this.cards.map(card => card.suit);
        this.ranks = this.cards.map(card => card.rank);
        this.isFlush = this.suits.every(suit => suit === this.suits[0]);
    }

    isRoyalFlush() {
        return this.isFlush &&
            this.ranks.includes('10') &&
            this.ranks.includes('J') &&
            this.ranks.includes('Q') &&
            this.ranks.includes('K') &&
            this.ranks.includes('A')
    }

    isStraightFlush() {
        return this.isFlush &&(
            this.ranks.includes('2') &&
            this.ranks.includes('3') &&
            this.ranks.includes('4') &&
            this.ranks.includes('5') &&
            this.ranks.includes('6')) ||
            this.ranks.includes('3') &&
            this.ranks.includes('4') &&
            this.ranks.includes('5') &&
            this.ranks.includes('6') &&
            this.ranks.includes('7') ||
            this.ranks.includes('4') &&
            this.ranks.includes('5') &&
            this.ranks.includes('6') &&
            this.ranks.includes('7') &&
            this.ranks.includes('8') ||
            this.ranks.includes('5') &&
            this.ranks.includes('6') &&
            this.ranks.includes('7') &&
            this.ranks.includes('8') &&
            this.ranks.includes('9') ||
            this.ranks.includes('6') &&
            this.ranks.includes('7') &&
            this.ranks.includes('8') &&
            this.ranks.includes('9') &&
            this.ranks.includes('10') ||
            this.ranks.includes('7') &&
            this.ranks.includes('8') &&
            this.ranks.includes('9') &&
            this.ranks.includes('10') &&
            this.ranks.includes('J') ||
            this.ranks.includes('8') &&
            this.ranks.includes('9') &&
            this.ranks.includes('10') &&
            this.ranks.includes('J') &&
            this.ranks.includes('Q') ||
            this.ranks.includes('9') &&
            this.ranks.includes('10') &&
            this.ranks.includes('J') &&
            this.ranks.includes('Q') &&
            this.ranks.includes('K')
    }

    isFourOfAKind() {
        const ranksNumber = {};

        this.ranks.forEach(rank => {
            if (!ranksNumber[rank]) {
                ranksNumber[rank] = 1;
            } else {
                ranksNumber[rank]++;
            }
        });

        return Object.values(ranksNumber).includes(4);
    }

    isFullHouse() {
        const ranksNumber = {};

        this.ranks.forEach(rank => {
            if (!ranksNumber[rank]) {
                ranksNumber[rank] = 1;
            } else {
                ranksNumber[rank]++;
            }
        });

        return (Object.values(ranksNumber).includes(3) && Object.values(ranksNumber).includes(2));
    }

    isPair() {
        const ranksNumber = {};

        this.ranks.forEach(rank => {
           if (!ranksNumber[rank]) {
               ranksNumber[rank] = 1;
           } else {
               ranksNumber[rank]++;
           }
        });

        return Object.values(ranksNumber).includes(2);
    }


    getBestHand() {
        if (this.isRoyalFlush()) {
            return OUTCOMES.ROYAL_FLUSH;
        } else if (this.isFlush) {
            return OUTCOMES.FLUSH;
        } else if (this.isPair()) {
            return OUTCOMES.PAIR;
        } else if (this.isStraightFlush()) {
            return OUTCOMES.STRAIGHTFLUSH;
        } else if (this.isFourOfAKind()) {
            return OUTCOMES.FOUROFAKIND;
        } else if (this.isFullHouse()) {
            return OUTCOMES.FULLHOUSE;
        } else {
            return OUTCOMES.NOTHING;
        }
    }
}


export default CardCombination;
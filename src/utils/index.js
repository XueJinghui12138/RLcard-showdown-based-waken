const suitMap = new Map([
    ['H', 'hearts'],
    ['D', 'diams'],
    ['S', 'spades'],
    ['C', 'clubs'],
]);

const suitMapSymbol = new Map([
    ['H', '\u2665'],
    ['D', '\u2666'],
    ['S', '\u2660'],
    ['C', '\u2663'],
]);

export function removeCards(cards, hands) {
    // remove cards from hands, return the remained hands
    let remainedHands = deepCopy(hands);
    // if the player's action is pass then return the copy of original hands
    if (cards === 'pass') {
        return remainedHands;
    }
    let misMatch = false;
    cards.forEach((card) => {
        let foundIdx = remainedHands.findIndex((element) => {
            return element === card;
        });
        if (foundIdx > -1) {
            remainedHands.splice(foundIdx, 1);
        } else {
            misMatch = true;
        }
    });
    if (misMatch) return false;
    else return remainedHands;
}

export function doubleRaf(callback) {
    // secure all the animation got rendered before callback function gets executed
    requestAnimationFrame(() => {
        requestAnimationFrame(callback);
    });
}

export function deepCopy(toCopy) {
    return JSON.parse(JSON.stringify(toCopy));
}

export function translateCardData(card) {
    let rankClass;
    let suitClass = '';
    let rankText;
    let suitText = '';
    // translate rank
    /***
     * xjh-
     * 
     * 
     * if (card === 'RJ') {
        rankClass = 'big';
        rankText = '+';
        suitClass = 'joker';
        suitText = 'Joker';
    } else if (card === 'BJ') {
        rankClass = 'little';
        rankText = '-';
        suitClass = 'joker';
        suitText = 'Joker';
     */
    
    // xjhm
    rankClass = card.charAt(1) === 'T' ? `10` : card.charAt(1).toLowerCase();
    rankClass = `rank-${rankClass}`;
    rankText = card.charAt(1) === 'T' ? `10` : card.charAt(1);
    
    // translate suitClass
    //xjh m
    suitClass = suitMap.get(card.charAt(0));
    suitText = suitMapSymbol.get(card.charAt(0));

    return [rankClass, suitClass, rankText, suitText];
}

export function millisecond2Second(t) {
    return Math.ceil(t / 1000);
}

export function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        const context = this,
            args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

export function computeHandCardsWidth(num, emWidth) {
    if (num === 0) return 0;
    return (num - 1) * 1.1 * emWidth + 4.3 * emWidth * 1.2 + 2;
}

export function card2SuiteAndRank(card) {
    if (card === 'BJ' || card === 'B') {
        return { suite: null, rank: 'X' };
    } else if (card === 'RJ' || card === 'R') {
        return { suite: null, rank: 'D' };
    } else {
        return { suite: card[0], rank: card[1] };
    }
}

//xjh-
    //'RJ',
    //'BJ',
    //
export const fullDoudizhuDeck = [
    'S3',
    'C3',
    'H3',
    'D3',
    'S2',
    'C2',
    'H2',
    'D2',
    'SA',
    'CA',
    'HA',
    'DA',
    'SK',
    'CK',
    'HK',
    'DK',
    'SQ',
    'CQ',
    'HQ',
    'DQ',
    'SJ',
    'CJ',
    'HJ',
    'DJ',
    'ST',
    'CT',
    'HT',
    'DT',
    'S9',
    'C9',
    'H9',
    'D9',
    'S8',
    'C8',
    'H8',
    'D8',
    'S7',
    'C7',
    'H7',
    'D7',
    'S6',
    'C6',
    'H6',
    'D6',
    'S5',
    'C5',
    'H5',
    'D5',
    'S4',
    'C4',
    'H4',
    'D4',
];

//xjhm
//   RJ: 54,
// BJ: 53,
// 
export const fullDoudizhuDeckIndex = {
    S3: 52,
    C3: 51,
    H3: 50,
    D3: 49,
    S2: 48,
    C2: 47,
    H2: 46,
    D2: 45,
    SA: 44,
    CA: 43,
    HA: 42,
    DA: 41,
    SK: 40,
    CK: 39,
    HK: 38,
    DK: 37,
    SQ: 36,
    CQ: 35,
    HQ: 34,
    DQ: 33,
    SJ: 32,
    CJ: 31,
    HJ: 30,
    DJ: 29,
    ST: 28,
    CT: 27,
    HT: 26,
    DT: 25,
    S9: 24,
    C9: 23,
    H9: 22,
    D9: 21,
    S8: 20,
    C8: 19,
    H8: 18,
    D8: 17,
    S7: 16,
    C7: 15,
    H7: 14,
    D7: 13,
    S6: 12,
    C6: 11,
    H6: 10,
    D6: 9,
    S5: 8,
    C5: 7,
    H5: 6,
    D5: 5,
    S4: 4,
    C4: 3,
    H4: 2,
    D4: 1,
};

export function sortDoudizhuCards(cards, ascending = false) {
    const cardsCopy = cards.slice();
    return cardsCopy.sort((a, b) => {
        return ascending
            ? fullDoudizhuDeckIndex[a] - fullDoudizhuDeckIndex[b]
            : fullDoudizhuDeckIndex[b] - fullDoudizhuDeckIndex[a];
    });
}

export function isDoudizhuBomb(cards) {
    //xjh-
    //if (cards.length === 2) return (cards[0] === 'RJ' && cards[1] === 'BJ') || (cards[0] === 'BJ' && cards[1] === 'RJ');
    if (cards.length === 4)
        return cards[0][1] === cards[1][1] && cards[0][1] === cards[2][1] && cards[0][1] === cards[3][1];
    return false;
}

export function shuffleArray(inputArray) {
    let array = inputArray.slice();
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

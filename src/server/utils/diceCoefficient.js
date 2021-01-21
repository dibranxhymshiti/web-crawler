const diceCoefficient = (string1, string2) => {
    if (string1.length < 2 || string2.length < 2){
        return 0;
    }

    let lBigrams = new Map();
    for (let i = 0; i < string1.length - 1; i++) {
        const bigram = string1.substr(i, 2);
        const count = lBigrams.has(bigram)
            ? lBigrams.get(bigram) + 1
            : 1;

        lBigrams.set(bigram, count);
    }

    let intersectionSize = 0;
    for (let i = 0; i < string2.length - 1; i++) {
        const bigram = string2.substr(i, 2);
        const count = lBigrams.has(bigram)
            ? lBigrams.get(bigram)
            : 0;

        if (count > 0) {
            lBigrams.set(bigram, count - 1);
            intersectionSize++;
        }
    }

    return (2.0 * intersectionSize) / (string1.length + string2.length - 2);
}

module.exports = diceCoefficient

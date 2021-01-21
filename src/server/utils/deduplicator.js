const diceCoefficient = require('./diceCoefficient');

const libraryDeduplicator = (libraries) => {

    const threshold = 0.7
    const deduplicatedLibraries = [{libraryName: libraries[0], count: 1}];

    for (let i = 1; i < libraries.length; i++) {

        for (let j = 0; j < deduplicatedLibraries.length; j++) {
            const similarity = diceCoefficient(deduplicatedLibraries[j].libraryName, libraries[i]);
            if (similarity >= threshold) {
                deduplicatedLibraries[j].count += 1;
                break;
            } else if (j === deduplicatedLibraries.length - 1) {
                deduplicatedLibraries.push({libraryName: libraries[i], count: 1})
                break;
            }
        }

    }

    return deduplicatedLibraries;
}

module.exports = libraryDeduplicator;

const deduplicator = require('./deduplicator');

test('Frequency of array element', () => {
    const sampleArray = ['jquery', 'axios', 'jquery', 'bootstrap', 'axios', 'jquery'];
    const occurrence = deduplicator(sampleArray);
    const element = occurrence.find(library => library.libraryName === 'jquery').count;

    expect(element).toBe(3);
})

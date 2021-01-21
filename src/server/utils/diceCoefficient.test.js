const diceCoefficient = require('./diceCoefficient');

test('Dice coefficient return 1 if strings are identical', () => {
    const identical = diceCoefficient('test', 'test');

    expect(identical).toBe(1);
});

test('Dice coefficient return 0 if strings length are < 2', () => {
    const identical = diceCoefficient('t', 't');
    expect(identical).toBe(0);
})

test('Dice coefficient return between 0 and 1 based on string similarity', () => {
    const identical = diceCoefficient('test123', 'tost123');
    expect(identical).toBeGreaterThanOrEqual(0);
    expect(identical).toBeLessThanOrEqual(1);
})

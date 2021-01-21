import {ordinalNumbers} from "./helperFunctions";

test('Ordinal Numbers', () => {
    expect(ordinalNumbers(1)).toBe('1st');
    expect(ordinalNumbers(2)).toBe('2nd');
    expect(ordinalNumbers(3)).toBe('3rd');
    expect(ordinalNumbers(15)).toBe('15th');
})

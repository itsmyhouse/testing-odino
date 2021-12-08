const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./testing');

test('First letter uppercase', () => {
    expect(capitalize("mario")).toEqual("Mario");
});

test('Reverse a sentence', () => {
    expect(reverseString('Buon Giorno')).toEqual('onroiG nouB');
});

/**
 *  CALCULATOR
 */
test('adding two number', () => {
    expect(calculator.add(1, 7)).toBe(8);
});

test('subtricting two number', () => {
    expect(calculator.subtract(6, 13)).toBe(-7);
});

test('dividing by zero', () => {
    expect(() => calculator.divide(3, 0)).toThrow(Error);
});

test('dividing by zero with message', () => {
    expect(() => calculator.divide(3, 0)).toThrow(/zero/);
});

test('divide two number', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('divide two number, floating point result', () => {
    expect(calculator.divide(1, 3)).toBeCloseTo(0.333);
});

test('multiply two number', () => {
    expect(calculator.multiply(5, 0.2)).toBe(1.0);
});

/**
 *  CAESARCIPHER
 */
test('lower case key = 1', () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toEqual("bcdefghijklmnopqrstuvwxyza");
});

test('lower case key = 15', () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 15)).toEqual("pqrstuvwxyzabcdefghijklmno");
});

test('lower case key = 26', () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 27)).toEqual("bcdefghijklmnopqrstuvwxyza");
});

test('lower case key = -1', () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", -1)).toEqual("zabcdefghijklmnopqrstuvwxy");
});

test('lower case key = 2 with punctuation', () => {
    expect(caesarCipher("ab.cd efghijklmnopqrstuvwxy?z", 2)).toEqual("cd.ef ghijklmnopqrstuvwxyza?b");
});

test('uppper case key = 1', () => {
    expect(caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1)).toEqual("BCDEFGHIJKLMNOPQRSTUVWXYZA");
});

/**
 *  analyzeArray
 */
test('analyze Array [1,8,3,4,2,6]', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});
import { createCountString } from '../utils.js';

const test = QUnit.test;

test('checks if createCountString is creating correct strings', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `climate modified 1 time`;
    const actual = createCountString('climate', 1);
    expect.equal(actual, expected);

    const expected2 = `climate modified 10 times`;
    const actual2 = createCountString('climate', 10);
    expect.equal(actual2, expected2);

    const expected3 = `architecture modified 2 times`;
    const actual3 = createCountString('architecture', 2);
    expect.equal(actual3, expected3);
});
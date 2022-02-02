// IMPORT MODULES under test here:
// import { example } from './example.js';
import { createCountString } from '../utils.js';

const test = QUnit.test;

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

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
    const actual3 = createCountString('climate', 2);
    expect.equal(actual3, expected3);
});

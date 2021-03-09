const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');


describe('#breedDetails', () => {
  it(`should return breed details for jerk cats`, () => {
    const input = "jerk";
    const expected = "Jerk cats are most cats. They hate everything, and exist solely to inflict the maximum suffering upon humans they encounter.";
  
  
    assert.strictEqual(breedDetails(input), expected);
  });
  it(`should return breed details for baby cats`, () => {
    const input = "baby";
    const expected = "A rarer breed of cat, the Baby cat is oh my god look at it. LOOK. BABY KITTY AWWW YES SCRITCHES PURR WHO'S A GOOD KITTY";

    assert.strictEqual(breedDetails(input), expected);
  });
  it(`should work regardless of input case`, () => {
    const input = "jERk";
    const expected = "Jerk cats are most cats. They hate everything, and exist solely to inflict the maximum suffering upon humans they encounter.";

    assert.strictEqual(breedDetails(input), expected);
  });
  it(`should return undefined for no breed match found`, () => {
    const input = "long";
    const expected = undefined;
  
  
    assert.isUndefined(breedDetails(input));
  });
  it(`should return undefined for no input`, () => {
    const expected = undefined;
  
  
    assert.isUndefined(breedDetails());
  });
});
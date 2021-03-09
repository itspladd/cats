const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');


describe('#breedDetailsFromFile', () => {
  it(`should return breed details for jerk cats`, (done) => {
    breedDetailsFromFile("jerk", (data) => {
      const expected = "Jerk cats are most cats. They hate everything, and exist solely to inflict the maximum suffering upon humans they encounter.";
      assert.equal(expected, data);
      done();
    });
  });
});
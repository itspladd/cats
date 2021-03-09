const catBreeds = {
  "jerk": "Jerk cats are most cats. They hate everything, and exist solely to inflict the maximum suffering upon humans they encounter.",
  "baby": "A rarer breed of cat, the Baby cat is oh my god look at it. LOOK. BABY KITTY AWWW YES SCRITCHES PURR WHO'S A GOOD KITTY"
};

// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
  if (!breed) {
    return undefined;
  }
  // can simply return the value (easy peasy kitty squeezy)
  return catBreeds[breed.toLowerCase()];
};

module.exports = breedDetails;
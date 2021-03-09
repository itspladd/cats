const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackWhenFileContentsGotten) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, `utf8`, (error, data) => {
    console.log("In readFile callback, data grabbed");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) return callbackWhenFileContentsGotten(data);
  });
};


// we try to get the return value
const baby = breedDetailsFromFile('baby', data => console.log(`Return value: `, data));
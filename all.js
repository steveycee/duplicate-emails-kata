// To help us time what we are doing.
const { performance } = require("perf_hooks");

let shuffleArray = (arrayToShuffle) => {
  for (var i = arrayToShuffle.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arrayToShuffle[i];
    arrayToShuffle[i] = arrayToShuffle[j];
    arrayToShuffle[j] = temp;
  }
  return arrayToShuffle;
};

let generateFakeEmails = (noOfRecords) => {
  console.log("Generating fake emails.");
  let array = [];
  let start = performance.now();
  for (let i = 0; i < noOfRecords; i++) {
    const domains = ["com", "co.uk", "fr", "net", "org", "edu", "gov", "kyoto"];
    const providers = ["outlook", "gmail", "aol", "bt", "facebook"];
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let string = "";
    for (var ii = 0; ii < 20; ii++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    // More life like emails by choose from a rebuilt list of common domains and providers
    let email =
      string +
      "@" +
      providers[Math.floor(Math.random() * providers.length)] +
      "." +
      domains[Math.floor(Math.random() * domains.length)];

    array.push(email);
  }
  let end = performance.now();
  console.log(
    "Tried generating",
    noOfRecords,
    "emails. Managed to generate",
    array.length,
    "emails generated in",
    end - start,
    "milliseconds"
  );
  // Doubling the array to make sure I've got 50 duplicates
  const doubledArray = array.concat(array);
  console.log("Doubled the array to: ", doubledArray);
  // Shuffling the array so its not just a list and then the same list again.
  let shuffledArray = shuffleArray(doubledArray);
  console.log("Shuffled array resulting in: ", shuffledArray);
  return shuffledArray;
};

let removeDuplicateEmails = (emails) => {
  let start = performance.now();
  console.log([...new Set(emails)]);
  let end = performance.now();
  console.log("The operation occured on: ", Object.keys(emails).length),
    "items.";
  console.log("The operation took: ", end - start, " milliseconds");
};

removeDuplicateEmails(generateFakeEmails(5));

const { performance } = require("perf_hooks");

const mockDataLong = require("./mock data/mock_data_long.json");
const mockDataShort = require("./mock data/mock_data_short.json");

let testEmailsArray = [
  "steve@steve.com",
  "steve@dave.com",
  "steve@steve.com",
  "ken@steve.com",
  "steve@ken.com",
  "ken@steve.com",
];

sort = (emails) => {
  let start = performance.now();
  console.log([...new Set(emails)]);
  // return [...new Set(emailsArray)]
  let end = performance.now();
  console.log("The operation occured on: ", Object.keys(mockDataLong).length),
    " items.";
  console.log("The operation took: ", end - start, " milliseconds");
};

sort(mockDataLong);

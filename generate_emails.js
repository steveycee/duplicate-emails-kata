const { performance } = require("perf_hooks");

module.exports.generate = (n) => {
  let start = performance.now();
  for (let i = 0; i < n; i++) {
    let array = [];
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let string = "";
    for (var ii = 0; ii < 15; ii++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    let email = string + "@" + string + ".com";
    array.push(email);
    console.log(array);
  }
  let end = performance.now();
  console.log(n, "emails generated in", end - start, "milliseconds");
};

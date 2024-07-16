// 1. Create a function that takes an object and returns the keys and values as separate arrays.
// 2. Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(obj) {
  const sorted = Object.fromEntries(Object.entries(obj).sort());
  return console.log([Object.keys(sorted), Object.values(sorted)]);
}

keysAndValues({ c: 3, b: 2, a: 1 });
keysAndValues({ b: "Microsoft", a: "Apple", c: "Google" });
keysAndValues({ key1: true, key3: undefined, key2: false });

// 1. Create a function such as mergeWords('Hello')() that returns
// the following string: 'Hello'

const mergeWords = (word) => () => console.log(word + " ");
mergeWords("Hello")();

// 2. When the function is called without any arguments return
// a string where all words have been merged into a sentence.

const mergeWords2 = (word1) => (word2) => (word3) => (word4) => () =>
  console.log(word1 + " " + word2 + " " + word3 + " " + word4);
mergeWords2("There")("is")("no")("spoon.")();

// 3. Below is a verbose JavaScript solution, turn this into
// a currying function.

const mergeWords3 = (string) => (nextString) => {
  if (nextString === undefined) {
    return string;
  } else {
    return mergeWords3(string + " " + nextString);
  }
};

console.log(mergeWords3("There")("is")("no")("spoon.")());

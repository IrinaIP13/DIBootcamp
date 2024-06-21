// Write a JavaScript function to find a word within a string

console.log(search_word("The fox quick fox brown fox", "fox"));

function search_word(str, search) {
  let arr = str.split(" ");
  let n = 0;
  arr.forEach((element) => {
    if (element === search) n++;
  });
  return `"${search}" was found ${n} times`;
}

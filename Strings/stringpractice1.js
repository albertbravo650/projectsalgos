var funStr = "Emma shreds on her electric cello";
console.log(typeof funStr);
var oneChar = funStr[26];
console.log(typeof oneChar);

console.log(funStr.length);
console.log("".length);

wordArray = funStr.split(" ");
console.log(wordArray[5].split(""));

console.log(wordArray.join(" "));

console.log(1 + 2 + "3" + "4" + 5 + 6);
console.log("\nxify");
function xify(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    newStr = newStr + "x";
  }

  return newStr;
}
console.log(xify("Balls"));
console.log(xify("Happy Nuts"));

console.log("\nyellingChars");
function yellingChar(str) {
  let yellingStr = "";
  for (let y = 0; y < str.length; y++) {
    yellingStr = yellingStr + str[y] + "!";
  }
  return yellingStr;
}
console.log(yellingChar("Mellons"));

console.log("\nindexedChars");
function indexedChars(str) {
  let indexedStr = "";
  for (let p = 0; p < str.length; p++) {
    indexedStr = indexedStr + p + str[p];
  }
  return indexedStr;
}
console.log(indexedChars("Balls"));

console.log("\nexclaim");
function exclaim(str) {
  let sentence = "";
  for (let s = 0; s < str.length; s++) {
    if (str[s] === "?" || str[s] === ".") {
      sentence = sentence + "!";
    } else {
      sentence = sentence + str[s];
    }
  }
  return sentence;
}
console.log(exclaim("Hello what is your name? My name is Ben."));

console.log("\ntruncate");
function truncate(str) {
  let shortStr = "";
  for (let t = 0; t < 15; t++) {
    shortStr = shortStr + str[t];
  }
  return shortStr + "...";
}
console.log(truncate("I love to hug my family"));

console.log("\nciEmailify");
function ciEmailify(str) {
  let email = "";
  for (let e = 0; e < str.length; e++) {
    if (str[e] === " ") {
      email = email + ".";
    } else {
      email = email + str[e];
    }
  }
  return email + "@codeimmersives.com";
}
console.log(ciEmailify("Benjamin Pinon"));

console.log("\nreverse");
function reversed(str) {
  let reversed1 = "";
  for (let r = str.length - 1; r < str.length && r >= 0; r--) { // the loop begins at the last str index and will run when r is greater or eqaul to zero and less than str length. -- counts 1 backwards through each index of the string.
    reversed1 = reversed1 + str[r];
  }
  return reversed1;
}

console.log(reversed("I love to play with big balls"));

console.log("\nonlyVowels")
function onlyVowels(str){
  
  let vowelsOnly = ""
  for (let o = 0; o < str.length; o++) {
    
   if (str[o].toLowerCase() === "i" || str[o].toLowerCase() === "e" || str[o].toLowerCase() === "a" || str[o].toLowerCase() === "o" || str[o].toLowerCase() === "u"){
     vowelsOnly = vowelsOnly + str[o]
  }
  }

  return vowelsOnly;
}
console.log(onlyVowels("JUst dO it"))



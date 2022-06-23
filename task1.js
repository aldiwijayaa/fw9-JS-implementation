// Palindrome Check
function palindromeCheck(word) {
  let re = /[\W_]/g;

  let lowRegStr = word.toLowerCase().replace(re, "");

  let arrayWord = lowRegStr.split("").reverse().join("");

  if (arrayWord === lowRegStr) {
    console.log("Ini Termasuk kata palindrome");
  } else {
    console.log("ini bukan kata palindrome");
  }
  return arrayWord;
}

console.log(palindromeCheck("malam"));

const vowels = /([aeiou])/gi;
function vowelDots(str) {
  return str.replaceAll(vowels, "$1.");
}

 
console.log(vowelDots("Algorithm"));


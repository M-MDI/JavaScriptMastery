function filterShortStateName(st) {
  const result = st.filter((st) => st.length < 7);
  return result;
}

function filterStartVowel(st) {
  const regex = /^[aeiou]/i;
  const result = st.filter((st) => st.match(regex));
  return result;
}

function filter5Vowels(st) {
  const regex = /([\w| ]*[aeuio]){5,}/gi;
  const result = st.filter((s) => s.match(regex));
  return result;
}

function filter1DistinctVowel(st) {
  return st.filter((word) => {
    const vowels = word.toLowerCase().match(/[aeiou]/g);
    if (!vowels) return false;
    const nwV = new Set(vowels);
    return nwV.size === 1;
  });
}

function multiFilter(st) {
  return st.filter(
    (word) =>
      word.capital.length >= 8 && !/^[aeiou]/i.test(word.name) && /[aeiou]/i.test(word.tag) &&
      word.region !== "South"
  );
}

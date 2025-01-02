function adder(st, i = 0) {
  const res = st.reduce((acc, vtoman) => acc + vtoman, i);
  return res;
}

function sumOrMul(st, i = 0) {
  const res = st.reduce((acc, vtoman) => {
    if (vtoman % 2 !== 0) {
      return acc + vtoman;
    } else if (vtoman % 2 === 0) {
      return acc * vtoman;
    }
  }, i);
  return res;
}

function funcExec(st, i = 0) {
  const res = st.reduce((acc, vtoman) => {
    return vtoman(acc);
  }, i);
  return res;
}

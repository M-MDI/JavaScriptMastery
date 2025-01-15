import  fs from 'node:fs' ;

const filename = process.argv[2];

const verydisco = word => {
  const mid = Math.ceil(word.length / 2)
  return word.slice(-mid) + word.slice(0, -mid)
}

function readFromFile(filename) {
  const content = fs.readFileSync(filename, "utf8");
  console.log(content.split(' ').map(verydisco).join(' '))
}


readFromFile(filename);

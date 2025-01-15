import { argv } from 'node:process';
const arg = process.argv[2]

const verydisco = word => {
    const mid = Math.ceil(word.length / 2)
    return word.slice(mid) + word.slice(0, mid)
}

console.log(arg.split(' ').map(verydisco).join(' '))
import { writeFile } from 'node:fs/promises';
const arg = process.argv[2]

const verydisco = word => {
    const mid = Math.ceil(word.length / 2)
    return word.slice(mid) + word.slice(0, mid)
}

const final = arg.split(' ').map(verydisco).join(' ') ;

async function writeToFile() {
    try {
        await writeFile('verydisco-forever.txt', final);
    } catch (err) {
        console.log(err);
    }
}

writeToFile();
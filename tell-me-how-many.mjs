import { readdir } from 'fs/promises'

const folderPath = process.argv[2]

async function countFiles(folder) {
    try {
        const files = await readdir(folder)
        console.log(files.length)
    } catch (err) {
        console.error(err)
    }
}
countFiles(folderPath)
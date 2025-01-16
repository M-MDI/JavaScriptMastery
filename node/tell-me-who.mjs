import { readdir } from "fs/promises";

const folderPath = process.argv[2];

async function countFiles(folder) {
  try {
    let total = [];
    const files = await readdir(folder);
    for (let i = 0; i < files.length; i++) {
      const res = files[i].split(".")[0];
      const ress = res.split("_")[0];
      const resss = res.split("_")[1];
      total.push([resss, ress]);
    }
    total.sort((a, b) => a[0].localeCompare(b[0]));
    for (let i = 0; i < total.length; i++) {
      console.log(`${i + 1}. ${total[i][0]} ${total[i][1]}`);
    }
  } catch (err) {
    console.error(err);
  }
}
countFiles(folderPath);

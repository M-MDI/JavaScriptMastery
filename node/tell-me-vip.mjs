import { readFile, readdir, writeFile } from "fs/promises";
import { join } from "path";
const dirPath = process.argv[2];
try {
  const files = await readdir(dirPath);
  const guests = await Promise.all(
    files
      .filter((file) => file.endsWith(".json"))
      .map(async (file) => {
        const [firstname, lastname] = file.slice(0, -5).split("_");
        const data = await readFile(join(dirPath, file));
        const { answer } = JSON.parse(data);
        return { firstname, lastname, answer: answer.toUpperCase() };
      })
  );
  const vips = guests
    .filter((guest) => guest.answer === "YES")
    .map((guest) => `${guest.lastname} ${guest.firstname}`)
    .sort()
    .map((guest, i) => `${i + 1}. ${guest}`)
    .join("\n");

  await writeFile("vip.txt", vips);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

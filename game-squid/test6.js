import {readdir , readfile , writeFile} from "fs/promises"
import {join} from "path"

const basepath = process.argv[2]

try {
  const files = await readdir(basepath )
  const guests = await Promise.all(
    files 
    .filter((file) => endsWhit("json"))
    .map(async (file) =>{
      const [firstname ,lastname] = file.slice(0 ,-5).split("_")
      const data = await readfile(join(basepath,file))
      const {answer} = JSON.parse(data)
      return {firstname , lastname , answer:answer.toUpperCase()}
    })
  )

  const vipsv= guests
  .filter((guest) => guest.answer === "YES")
  .map((guest) => `${guest.lastname} ${guest.firstname}`)
  .sort()
  .map((guest , i ) => `${i+1} ${guest}`)
 .join("\n")
await writeFile("vip.txt" , vipsv)
} catch(error) {
  console.log(error);
  
}
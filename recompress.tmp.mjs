import sharp from "./node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js"
import { readdirSync, statSync, renameSync } from "node:fs"

const dir = "public/images"
for (const file of readdirSync(dir)) {
    if (!file.endsWith(".jpg")) continue
    const path = `${dir}/${file}`
    const before = statSync(path).size
    const tmp = `${path}.tmp`
    await sharp(path)
        .resize({ width: 2000, withoutEnlargement: true })
        .jpeg({ quality: 72, progressive: true, mozjpeg: true })
        .toFile(tmp)
    const after = statSync(tmp).size
    if (after < before) {
        renameSync(tmp, path)
        console.log(
            file,
            Math.round(before / 1024) + "KB ->",
            Math.round(after / 1024) + "KB"
        )
    } else {
        renameSync(tmp, path + ".skip")
        console.log(file, "kept (recompress not smaller)")
    }
}

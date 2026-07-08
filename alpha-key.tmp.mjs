import sharp from "sharp"

const { data, info } = await sharp("/tmp/emblem-sq.jpg")
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

for (let i = 0; i < data.length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const alpha = Math.max(r, g, b)
    if (alpha > 0) {
        const scale = 255 / alpha
        data[i] = Math.min(255, Math.round(r * scale))
        data[i + 1] = Math.min(255, Math.round(g * scale))
        data[i + 2] = Math.min(255, Math.round(b * scale))
    }
    data[i + 3] = alpha
}

const keyed = sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
})
await keyed.clone().resize(512, 512).png().toFile("src/app/icon.png")
await keyed.clone().resize(180, 180).png().toFile("src/app/apple-icon.png")
await keyed.clone().resize(96, 96).png().toFile("public/brand/emblem.png")
console.log("transparent emblems written")

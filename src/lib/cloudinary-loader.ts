type CloudinaryLoaderParams = {
    src: string
    width: number
    quality?: number
}

export default function cloudinaryLoader({
    src,
    width,
    quality,
}: CloudinaryLoaderParams) {
    if (src.startsWith("/")) return src
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    const q = quality ? `q_${quality}` : "q_auto"
    return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,${q},w_${width},c_limit/${src}`
}

import { images_base_url } from "../config";

export default function base_upload_image_api_concat({ images }: { images: string }) {
    return images?.split(',')?.map(r => {
        const check = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)/.test(r)
        return `${!check ? images_base_url : ''}${r?.trim()}`
    })
}
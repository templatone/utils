/**
 * @deprecated Use class `Images`, `Files` or`Blobs`.
 */
export class Loaders {

    /**
     * @deprecated Use 'Images.getFormFile'.
     */
    static async getImageFormFile(file: File): Promise<HTMLImageElement> {
        console.warn("'Loaders.getImageFormFile' is deprecated. Use 'Images.getFormFile'.");

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            const img = new Image();

            reader.addEventListener('load', async () => {
                img.src = reader.result as string;

                resolve(await Loaders.waitToImageLoad(img));
            }, false);
        });
    }


    /**
     * @deprecated Use 'Images.getFromUrl'.
     */
    static async getImageByPath(path: string): Promise<HTMLImageElement> {
        console.warn("'Loaders.getImageByPath' is deprecated. Use 'Images.getFromUrl'.");

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = path;

            img.addEventListener('load', () => {
                resolve(img);
            });
            img.addEventListener('error', () => {
                reject(`Image „${path}“ cannot be loaded.`);
            });
        });
    }


    /**
     * @deprecated Use 'Images.waitToLoad'.
     */
    static async waitToImageLoad(img: HTMLImageElement): Promise<HTMLImageElement> {
        console.warn("'Loaders.waitToImageLoad' is deprecated. Use 'Images.waitToLoad'.");

        return new Promise((resolve, reject) => {
            const src = img.src;
            img.src = src;
            img.addEventListener('load', () => {
                resolve(img);
            })
        });
    }
}
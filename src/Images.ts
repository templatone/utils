export class Images {

    static async getFormFile(file: File): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.addEventListener('load', async () => {
                const image = new Image();

                image.addEventListener('load', () => {
                    resolve(image);
                }, { once: true});

                image.src = reader.result as string;
            
            }, { once: true });

            reader.readAsDataURL(file);
        });
    }

    
    static async getByPath(url: string): Promise<HTMLImageElement> {
        console.warn("'Loaders.getByPath' is deprecated. Use 'Images.getFromUrl'.");
        return Images.getFromUrl(url);
    }


    static async getFromUrl(url: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const image = new Image();

            image.addEventListener('load', () => {
                resolve(image);
            }, { once: true });

            image.addEventListener('error', () => {
                reject(`Image „${url}“ cannot be loaded.`);
            }, { once: true });

            image.src = url;
        });
    }


    static async waitToLoad(image: HTMLImageElement): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            if (image.complete && image.naturalHeight !== 0) {
                resolve(image);
            } else {
                image.addEventListener('load', () => {
                    resolve(image);
                }, { once: true });
            }
        });
    }
}

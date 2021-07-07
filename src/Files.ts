export class Files {
    static async readAsDataURL(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                resolve(reader.result as string);
            }, { once: true });

            if (file) {
                reader.readAsDataURL(file);
            } else {
                reject("Invalid file source.");
            }
        });
    }


    static async readAsArrayBuffer(file: File): Promise<ArrayBuffer> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                resolve(reader.result as ArrayBuffer);
            }, { once: true });

            if (file) {
                reader.readAsArrayBuffer(file);
            } else {
                reject("Invalid file source.");
            }
        });
    }


    static async readAsText(file: File, encoding?: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                resolve(reader.result as string);
            }, { once: true });

            if (file) {
                reader.readAsText(file, encoding);
            } else {
                reject("Invalid file source.");
            }
        });
    }


    static async readAsBinaryString(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                resolve(reader.result as string);
            }, { once: true });

            if (file) {
                reader.readAsBinaryString(file);
            } else {
                reject("Invalid file source.");
            }
        });
    }
}
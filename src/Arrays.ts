export class Arrays {

    static getShuffle<T>(array: T[]): T[] {
        const arr = [...array];

        let currentIndex: number = arr.length;
        let randomIndex: number;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }

        return arr;
    }

}

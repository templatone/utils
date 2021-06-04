export declare class Cookies {
    static get(name: string): string | null;
    /**
     *
     * @param cookieName
     * @param cookieValue
     * @param expiration Expiration in miliseconds.
     */
    static set(cookieName: string, cookieValue: string | null, expiration: number): void;
}

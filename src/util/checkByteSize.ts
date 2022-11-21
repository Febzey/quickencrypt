import type { CipherKey } from "crypto";

/**
 * Check if the byte size of a string is less than or equal to the maximum byte size.
 * @param key 
 * @param length 
 * @returns boolean
 */
export default function checkByteSize(key: string | CipherKey, length: number): boolean {
    if (typeof key !== "string") key = key.toString();
    if (key.length !== length) return false;
    return true;
}
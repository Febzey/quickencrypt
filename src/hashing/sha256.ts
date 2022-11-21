import { createHash } from "crypto";

/**
 * Hash a string with sha256 algorithm.
 * @param text 
 * @returns string
 */
 export default function quickSha256Encrypt(text: string): string {
    const hash = createHash("sha256");
    hash.update(text);
    return hash.digest("hex");
}

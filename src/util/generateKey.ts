import { randomBytes } from "crypto";

/**
 * Generate a random key of a given byte size
 * choose whether to use a hex string or a Buffer.
 * @returns string 
 */
 export default function generateKey(size: number, type?: "string" | "Buffer"): Buffer | string {
    let bytes: string | Buffer
    bytes = randomBytes(size);
    if (type === "Buffer") return bytes;
    bytes = bytes.toString("hex").substring(0, size);
    return bytes;
}
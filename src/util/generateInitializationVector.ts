import { randomBytes } from "crypto";

/**
 * Generate a random initialization vector of a given byte size
 * @param byteLength 
 * @returns Buffer
 */
export default function generateInitializationVector(byteLength: number): Buffer {
    return randomBytes(byteLength);
}
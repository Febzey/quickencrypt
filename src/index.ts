export * as checkByteSize from "./util/checkByteSize.js";
export * as generateKey   from "./util/generateKey.js";
export * as simpleAes     from "./encryption/aes.js";
export * as simpleSha256  from "./hashing/sha256.js";






/**
 * Decrypt a string using a private key and algorithm of choice.
 * @param text 
 * @param key 
 * @param algo 
 * @returns string 
 */
// export function decrypt(text: string, key: crypto.CipherKey, iv: Buffer, algo?: string): string {
//     if (!algo) algo = "aes-256-cbc";

//     const Cipher = crypto.createDecipheriv(algo, key, iv)
//     let decrypted = Cipher.update(text, "hex", "utf8");
//     decrypted += Cipher.final("utf8");

//     return decrypted;
// }


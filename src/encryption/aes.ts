import { CipherKey, createCipheriv } from "crypto";
import generateInitializationVector from "../util/generateInitializationVector.js";
/**
 * Encrypt a string using AES-256-CBC encryption algorithm.
 * a 32 byte key is required for AES-256-CBC.
 * if no initialization vector is provided, one will be generated and returned.
 * @param text the text you want to encrypt
 * @param key the private key you want to use to encrypt the text
 * @param iv the initialization vector you want to use to encrypt the text
 * @returns [string, Buffer] the encrypted text and the initialization vector
 */
export default function quickAesEncrypt(text: string, key: CipherKey, iv?: Buffer): { encrypted: string, iv: Buffer } {
    if (!iv) iv = generateInitializationVector(16);

    const Cipher = createCipheriv("aes-256-ccm", key, iv)
    let encrypted = Cipher.update(text, "utf8", "hex");
    encrypted += Cipher.final("hex");

    return { encrypted, iv };
}

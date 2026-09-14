import crypto from 'crypto';

/**
 * Derives a 32-byte AES-256 key from the TOKEN_ENCRYPTION_KEY environment variable.
 */
function getEncryptionKey(): Buffer {
  const secret = process.env.TOKEN_ENCRYPTION_KEY;
  if (!secret) {
    throw new Error('TOKEN_ENCRYPTION_KEY environment variable is not configured.');
  }
  // Standardize key to 32 bytes via SHA-256
  return crypto.createHash('sha256').update(secret).digest();
}

/**
 * Encrypts a plaintext string using AES-256-GCM.
 * Output format: "iv:authTag:ciphertext" (all in hex).
 */
export function encryptToken(text: string): string {
  const key = getEncryptionKey();
  const iv = crypto.randomBytes(12); // 12-byte IV standard for GCM
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag();

  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}

/**
 * Decrypts an AES-256-GCM encrypted string formatted as "iv:authTag:ciphertext" (hex).
 */
export function decryptToken(encryptedData: string): string {
  const key = getEncryptionKey();
  const parts = encryptedData.split(':');
  if (parts.length !== 3) {
    throw new Error('Invalid encrypted token format');
  }

  const [ivHex, authTagHex, ciphertextHex] = parts;
  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);

  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(ciphertextHex, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

/**
 * Hashes an opaque desktop session token using SHA-256 for secure DB lookup.
 */
export function hashSessionToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

/**
 * Generates a cryptographically secure 64-character opaque session token.
 */
export function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

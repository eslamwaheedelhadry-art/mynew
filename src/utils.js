/**
 * Return a random integer between min and max (inclusive).
 *
 * @param {number} min - Minimum integer (inclusive).
 * @param {number} max - Maximum integer (inclusive).
 * @returns {number} Random integer in [min, max].
 */
export function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

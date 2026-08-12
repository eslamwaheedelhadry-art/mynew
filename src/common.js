/**
 * Add two numbers.
 *
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Multiply two numbers.
 *
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Product of a and b.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Join multiple string parts into one string.
 *
 * @param {...string} parts - String parts to join.
 * @returns {string} The joined string.
 */
export function join(...parts) {
  return parts.join('');
}

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

export default { add, multiply, join, randInt };

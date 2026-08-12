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

export default { add, multiply, join };

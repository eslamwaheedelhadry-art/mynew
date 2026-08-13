import assert from 'assert';
import { add, multiply, join, randInt } from './shared.js';

assert.strictEqual(add(1, 2), 3, 'add failed');
assert.strictEqual(multiply(3, 4), 12, 'multiply failed');
assert.strictEqual(join('a', 'b'), 'ab', 'join failed');
// randInt(2,2) should always be 2
assert.strictEqual(randInt(2, 2), 2, 'randInt failed');

console.log('All tests passed');

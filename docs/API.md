# API Documentation (generated)

This document was generated from inline JSDoc comments and Python docstrings added as examples.

## JavaScript (src/index.js)

### add(a, b)
Add two numbers.
- Parameters:
  - a (number): First number.
  - b (number): Second number.
- Returns: number — Sum of a and b.

### multiply(a, b)
Multiply two numbers.
- Parameters:
  - a (number): First number.
  - b (number): Second number.
- Returns: number — Product of a and b.

### join(...parts)
Join multiple string parts into one string.
- Parameters:
  - ...parts (string[]): String parts to join.
- Returns: string — The joined string.

## JavaScript (src/utils.js)

### randInt(min, max)
Return a random integer between min and max (inclusive).
- Parameters:
  - min (number): Minimum integer (inclusive).
  - max (number): Maximum integer (inclusive).
- Returns: number — Random integer in [min, max].

## Python (src/example.py)

### add(a: int, b: int) -> int
Add two integers.

Parameters:
- a: First integer.
- b: Second integer.

Returns:
- Sum of a and b.

### multiply(a: int, b: int) -> int
Multiply two integers.

Parameters:
- a: First integer.
- b: Second integer.

Returns:
- Product of a and b.


Regenerating docs:
- JavaScript: install jsdoc and run `npm run docs` to generate HTML docs into ./docs.
- Python: use Sphinx, pdoc, or similar to autodoc from src/.

def add(a: int, b: int) -> int:
    """Add two integers."""
    return a + b


def multiply(a: int, b: int) -> int:
    """Multiply two integers."""
    return a * b


def join(*parts: str) -> str:
    """Join string parts into a single string."""
    return ''.join(parts)


__all__ = ["add", "multiply", "join"]

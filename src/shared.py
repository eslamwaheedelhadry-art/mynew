try:
    from .common import add, multiply, join
except ImportError:  # pragma: no cover
    from common import add, multiply, join

__all__ = ["add", "multiply", "join"]

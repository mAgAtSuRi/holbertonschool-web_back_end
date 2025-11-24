#!/usr/bin/env python3
"""Type annotations
"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """return function"""
    def multiplier_func(x: float) -> float:
        return x * multiplier
    return multiplier_func

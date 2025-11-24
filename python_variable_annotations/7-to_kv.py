#!/usr/bin/env python3
"""Type annotations
"""


from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """return tuple"""
    return tuple(k, float(v**2))

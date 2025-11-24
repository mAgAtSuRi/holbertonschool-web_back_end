#!/usr/bin/env python3
"""Type annotations
"""


from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """return sum"""
    return float(sum(mxd_list))

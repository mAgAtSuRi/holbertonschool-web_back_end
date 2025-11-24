#!/usr/bin/env python3
"""Type annotations
"""


from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[float, int]]) -> float:
    """return sum"""
    return sum(mxd_list)

#!/usr/bin/env python3
from typing import Tuple
"""Calculating indexes"""


def index_range(page: int, page_size: int) -> Tuple:
    """function returning indexes at pages"""
    if page <= 0:
        page = 1
    return ((page - 1) * page_size, page * page_size)

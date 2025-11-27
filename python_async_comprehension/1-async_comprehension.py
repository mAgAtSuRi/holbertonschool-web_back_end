#!/usr/bin/env python3
"""async gene and coroutine"""
from typing import List
async_generator = __import__("0-async_generator").async_generator


async def async_comprehension() -> List[float]:
    """async comprehension"""
    return [x async for x in async_generator()]

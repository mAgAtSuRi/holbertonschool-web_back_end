#!/usr/bin/env python3
"""measure time"""
import time
import asyncio
async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """Coroutine measuring time"""
    start = time.time()
    await asyncio.gather(*(async_comprehension() for i in range(4)))
    end = time.time()
    total_time = end - start
    return total_time

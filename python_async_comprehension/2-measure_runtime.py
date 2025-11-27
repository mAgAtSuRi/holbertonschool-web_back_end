#!/usr/bin/env python3
"""measure time"""
import time
import asyncio
async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """Coroutine measuring time"""
    tasks = []
    start = time.time()
    for i in range(4):
        tasks.append(async_comprehension())
    await asyncio.gather(*tasks)
    end = time.time()
    total_time = end - start
    return total_time

#!/usr/bin/python3
"""
This module defines an async coroutine that returns a random delay
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    An asynchronous coroutine that returns a random delay

    Args:
    max_delay (int): default value is 10

    Return:
    A random delay between 0 and max_delay included
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: float):
    """Spawn wait_random n times with the specified max_delay."""
    tasks = [wait_random(max_delay) for _ in range(n)]
    time_list = []

    # Append delays in the order tasks finish
    for task in asyncio.as_completed(tasks):
        delay = await task
        time_list.append(delay)

    return time_list

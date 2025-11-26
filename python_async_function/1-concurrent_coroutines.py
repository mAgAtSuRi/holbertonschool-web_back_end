#!/usr/bin/env python3
"""
This module defines an async coroutine that returns a random delay
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times with the specified max_delay.
    Return a list of delays in ascending order without using sort().
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    ordered_delays = []

    # Get each delay as soon as each task finishes
    for completed in asyncio.as_completed(tasks):
        delay = await completed

        # Insert delay in ascending order
        if not ordered_delays:
            ordered_delays.append(delay)
        else:
            inserted = False
            for i in range(len(ordered_delays)):
                if delay < ordered_delays[i]:
                    ordered_delays.insert(i, delay)
                    inserted = True
                    break
            if not inserted:
                ordered_delays.append(delay)

    return ordered_delays

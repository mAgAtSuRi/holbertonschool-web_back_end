#!/usr/bin/env python3
"""Module measuring time"""
import asyncio
import time
wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n, max_delay):
    """calculate time per operation"""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()

    total = end - start
    return total / n

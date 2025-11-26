#!/usr/bin/env python3
"""Module measuring time"""
import asyncio
wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n, max_delay):
    """calculate time per operation"""
    time_list = asyncio.run(wait_n(n, max_delay))
    total_time = time_list[-1]
    return total_time / n

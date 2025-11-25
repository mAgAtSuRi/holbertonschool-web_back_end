#!/usr/bin/env python3
"""
This module defines an async coroutine that returns a random delay
"""
import asyncio, random

async def wait_random(max_delay: int = 10) -> float:
	"""asynchronous routine returning random num"""
	wait_delay = random.uniform(0, max_delay)
	await asyncio.sleep(wait_delay)
	return wait_delay

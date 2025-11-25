#!/usr/bin/python3
"""
This module defines an async coroutine that returns a random delay
"""
from basic_async_syntax import wait_random
import asyncio, random


async def wait_n(n, max_delay):
	"""spawn wait_random n times with the specified max_delay."""
	tasks = [wait_random(max_delay) for i in range(n)]
	time_list = []
	# append as soon as coroutine is finished
	for task in asyncio.as_completed(tasks):
		time = await task
		time_list.append(time)
	return time

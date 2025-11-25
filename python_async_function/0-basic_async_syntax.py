#!/user/bin/env python3
import asyncio, random

async def wait_random(max_delay = 10):
	wait_delay = random.uniform(0, max_delay)
	await asyncio.sleep(wait_delay)
	return wait_delay

export default function cleanSet(set, startString) {
	if (!startString || typeof startString !== 'string') {
		return ''
	}

	let final_string = []
	for (let element of set) {
		if (element.startsWith(startString)) {
			final_string.push(element.slice(startString.length))
		}
	}
	return final_string.join('-')
}
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
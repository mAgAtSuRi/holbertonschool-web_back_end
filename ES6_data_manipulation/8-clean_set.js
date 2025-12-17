export default function cleanSet(set, startString) {
	let final_string = []
	for (let element of set) {
		if (element.startsWith(startString)) {
			final_string.push(element.slice(startString.length))
		}
	}
	return final_string.join('-')
}

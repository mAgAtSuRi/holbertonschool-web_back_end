export default function divideFunction(numerator, denominator) {
	if (denominator === 0) {
		throw new Error('cannot divide by 0')
	} else {
		return (numerator / denominator)
	}
}
// console.log(divideFunction(10, 2));
// console.log(divideFunction(10, 0));
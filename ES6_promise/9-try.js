import divideFunction from './8-try';
export default function guardrail(mathFunction) {
	const queue = []
	try {
		const result = mathFunction()
		queue.push(result)
	}
	catch(e) {
		queue.push(`Error: ${e.message}`)
	}
	queue.push('Guardrail was processed')
	return queue
}
// console.log(guardrail(() => { return divideFunction(10, 2)}));
// console.log(guardrail(() => { return divideFunction(10, 0)}));

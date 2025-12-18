export default function handleResponseFromAPI(promise) {
	return promise
	.then(result => {
		console.log("Got a response from the API")
		return {'status': 200, 'body': result}
	})
	.catch(error => {
		console.log("Got a responde from the API")
		throw new Error('Error')
	})
}
const promise = Promise.resolve();
handleResponseFromAPI(promise);
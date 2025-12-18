export default function handleResponseFromAPI(promise) {
	return promise
	.then(() => {
		console.log("Got a response from the API")
		return {'status': 200, 'body': 'success'}
	})
	.catch(() => {
		console.log("Got a responde from the API")
		throw new Error('Error')
	})
}
const promise = Promise.reject();
handleResponseFromAPI(promise);
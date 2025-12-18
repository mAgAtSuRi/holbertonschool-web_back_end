import {uploadPhoto, createUser} from "./utils.js" 
export default function handleProfileSignup() {
	const photo = uploadPhoto()
	return photo
	.then(result1 => createUser()
		.then(result2 => {
			console.log(`${result1.body} ${result2.firstName} ${result2.lastName}`)
			}))
		.catch(() => console.log('Signup system offline'))
}
handleProfileSignup();
// // version async
// export default async function handleProfileSignup() {
// 	try {
// 		const result1 = await uploadPhoto()
// 		const result2 = await createUser()
// 		console.log(`${result1.body} ${result2.firstName} ${result2.lastName}`)
// 	} catch {
// 		console.log('Signup system offline')
// 	}
// }
// handleProfileSignup();
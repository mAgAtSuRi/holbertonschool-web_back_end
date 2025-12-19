import signUpUser from "./4-user-promise.js"
import uploadPhoto from "./5-photo-reject.js"
export default function handleProfileSignup(firstName, lastName, filename) {
	const result1 = signUpUser(firstName, lastName)
	return result1
	.then(() => uploadPhoto(filename))
}

// console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
import { get } from "https"

export default function getListsStudents(id, firstName, location) {
	return [
		{id: 1, firstName: 'Guillaume', location: 'San Francisco'},
		{id: 2, firstName: 'James', location: 'Columbia'},
		{id: 5, firstName: 'Serena', location: 'San Francisco'}
	]
}

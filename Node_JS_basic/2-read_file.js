const fs = require("fs") 

function countStudents(path) {
	try {
		const content = fs.readFileSync(path, "utf8")
		const results = {}
		let total_student = 0
		const lines = content
		.trim()
		.split("\n")
		.slice(1)
		console.log(lines)
		for (const line of lines) {
			total_student += 1
			const split_line = line.split(',')
			if (!(split_line[3] in results)) {
				results[split_line[3]] = {students_nb : 1, students_list: [split_line[0]]}
			} else {
				results[split_line[3]].students_nb += 1
				results[split_line[3]].students_list.push(split_line[0])
			}
		}
		console.log(`Number of students: ${total_student}`)
		for (const [key, value] of Object.entries(results)) {
			console.log(`Number of students in ${key}: ${value.students_nb}. List: ${value.students_list}`)
		}
	} catch(error) {
		throw new Error('Cannot load the database')
	}
}

module.exports = countStudents;

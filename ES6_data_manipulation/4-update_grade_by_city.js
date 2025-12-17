export default function updateStudentGradeByCity(student_list, city, newGrades) {
	return student_list
	.filter(element => element.location === city)
	.map(element => {
		const gradeobj = newGrades.find(g => g.studentId === element.id)
		return {
		...element,
		grade: gradeobj ? gradeobj.grade : "N/A"}})
}

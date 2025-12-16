export default function getStudentIdsSum(student_list) {
	return student_list.reduce((acc, element) => acc + element['id'], 0)
}
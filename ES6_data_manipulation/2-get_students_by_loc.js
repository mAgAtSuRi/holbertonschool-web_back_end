export default function getStudentsByLocation(student_list, city) {
	return student_list.filter(element => element["location"] == city)
}

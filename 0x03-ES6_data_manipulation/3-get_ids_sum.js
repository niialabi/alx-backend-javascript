export default function getStudentIdsSum(studentList) {
  return (studentList.map((student) => student.id)).reduce((prev, curr) => prev + curr);
}

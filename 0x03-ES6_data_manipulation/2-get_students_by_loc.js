export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((stu) => stu.location === city);
}

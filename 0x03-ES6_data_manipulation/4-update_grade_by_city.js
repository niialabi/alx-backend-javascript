export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const studentObject = student;
      studentObject.grade = 'N/A';
      for (const grade of newGrades) {
        if (grade.studentId === studentObject.id) {
          studentObject.grade = grade.grade;
          break;
        }
      }
      return studentObject;
    });
}


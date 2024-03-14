interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }


const student1: Student = {
  firstName: 'Nii',
  lastName: 'Fik',
  age: 12,
  location: 'Accra'
};

const student2: Student = {
  firstName: 'Julien',
  lastName: 'Alx',
  age: 13,
  location: 'Nairobi'
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  studentsList.forEach(student => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;

      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
});
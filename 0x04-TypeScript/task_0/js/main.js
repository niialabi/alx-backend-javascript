var student1 = {
    firstName: 'Nii',
    lastName: 'Fik',
    age: 12,
    location: 'Accra'
};
var student2 = {
    firstName: 'Julien',
    lastName: 'Alx',
    age: 13,
    location: 'Nairobi'
};
var studentsList = [student1, student2];
document.addEventListener("DOMContentLoaded", function () {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    studentsList.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
});

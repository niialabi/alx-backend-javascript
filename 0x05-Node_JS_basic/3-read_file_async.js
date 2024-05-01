const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    const database = await fs.readFile(filePath, 'utf8');
    const entries = database.split('\n').filter((line) => line.trim() !== '');

    console.log(`Number of students: ${entries.length - 1}`);

    const fieldMap = {};
    entries.slice(1).forEach((entry) => {
      const fields = entry.split(',');
      const name = fields[0];
      const field = fields[3];

      if (fieldMap[field]) {
        fieldMap[field].push(name);
      } else {
        fieldMap[field] = [name];
      }
    });

    Object.keys(fieldMap).forEach((field) => {
      console.log(`Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`);
    });

    return;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

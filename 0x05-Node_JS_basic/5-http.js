const http = require('http');
const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    const db = await fs.readFile(filePath, 'utf8');
    let data;
    const students = db.split('\n').filter((line) => line.trim() !== '');
    data += `Number of students: ${students.length - 1}`;
    const fieldMap = {};
    students.slice(1).forEach((entry) => {
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
      data += `Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`;
    });
    return data;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
}).listen(1245);

module.exports = app;

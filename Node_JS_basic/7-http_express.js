const fs = require('fs');
const express = require('express');

const database = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const results = {};
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentLines = lines.slice(1);

      for (const line of studentLines) {
        const content = line.split(',');
        const firstName = content[0];
        const field = content[3];

        if (!(field in results)) {
          results[field] = { students_nb: 1, students_list: [firstName] };
        } else {
          results[field].students_nb += 1;
          results[field].students_list.push(firstName);
        }
      }

      resolve(results);
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const results = await countStudents(database);

    let responseText = 'This is the list of our students\n';
    let totalStudents = 0;

    for (const key of Object.keys(results)) {
      totalStudents += results[key].students_nb;
    }

    responseText += `Number of students: ${totalStudents}\n`;

    for (const [key, value] of Object.entries(results)) {
      responseText += `Number of students in ${key}: ${value.students_nb}. List: ${value.students_list.join(', ')}\n`;
    }

    // Important : envoyer exactement comme attendu, avec le dernier \n
    res.send(responseText);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(1245);

module.exports = app;

const fs = require('fs');

function countStudents(path) {
  try {
    let totalStudents = 0;
    const results = {};

    const data = fs.readFileSync(path, 'utf8');
    const lines = data
      .trim()
      .split('\n')
      .slice(1);

    for (const line of lines) { // pour chaque ligne...
      totalStudents += 1;
      const content = line.split(','); // va faire un tableau en séparant les valeurs via la ','
      if (!(content[3] in results)) {
        results[content[3]] = { students_nb: 1, students_list: [content[0]] };
      } else {
        results[content[3]].students_nb += 1;
        results[content[3]].students_list.push(content[0]);
      }
    }
    console.log(`Number of students: ${totalStudents}`);
    for (const [key, value] of Object.entries(results)) {
      console.log(`Number of students in ${key}: ${value.students_nb}. List: ${value.students_list.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

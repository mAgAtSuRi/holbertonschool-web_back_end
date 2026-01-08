const http = require('http');
const countStudents = require('./3-read_file_async');

const db = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    return res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(db)
      .then((output) => {
        res.end(output);
      })
      .catch((err) => {
        res.end(err.message);
      });
    return;
  }
});

app.listen(1245);

module.exports = app;

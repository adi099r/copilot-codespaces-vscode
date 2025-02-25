// Create web server
const http = require('http');
const fs = require('fs');

// Create server
http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Read the file
  fs.readFile('./views/comments.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
}).listen(3000, () => {
  console.log('Server is running on port 3000');
});
// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '0.0.0.0';
const port = 3000;

// Create an HTTP server and define the response
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Status code 200 means OK
  res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
  res.end('Hello, Devops!\n'); // Send the response text
});

// Start the server and listen on the defined port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


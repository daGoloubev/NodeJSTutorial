const HTTP = require('http');
const IP = '127.0.0.1';
const PORT = 3000;
HTTP.createServer((REQUEST, response) => {
	const {headers, method, url} = REQUEST;
	let body = [];
	REQUEST.on('error', (err) => {
		console.error(err.stack);
	})
	.on('data', (chunk) => {
		body.push(chunk);
	})
	.on('end', () => {
		body = Buffer.concat(body).toString();
		// At this point, we have the headers, method, url and body, and can now
		// do whatever we need to in order to repond to this request.
	});
}).listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
}); // Activates this server , listening on port 8080
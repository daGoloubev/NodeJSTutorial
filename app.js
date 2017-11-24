const HTTP = require('http');
const IP = '127.0.0.1';
const PORT = 3000;
HTTP.createServer((REQUEST, RESPONSE) => {
	const { headers, method, url } = REQUEST;
	let body = [];
	REQUEST.on('error', (err) => {
		// This prinst the error message and the stack trace to 'stderr'
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
	/////////////////// RESPONSE ///////////////////////
	RESPONSE.on('error', (err) => {
		console.error(err.stack);
	});
	RESPONSE.statusCode = 200; 
	RESPONSE.setHeader('Content-Type', 'application/json');
	// Note: the 2 lines above could be replaced with this next one: 
	// RESPONSE.writeHead(200, {'Content-Type': 'application/json'});
	const RESPONSE_BODY = { headers, method, url, body };
	RESPONSE.write(JSON.stringify(RESPONSE_BODY));
	RESPONSE.end();
	// Note: the 2 lines above could be replaced with this next one: 
	// RESPONSE.END(JSON.stringify(RESPONSE_BODY));
	
}).listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
}); // Activates this server , listening on port 8080
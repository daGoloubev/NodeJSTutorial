const HTTP = require('http');
const IP = '127.0.0.1';
const PORT = 3000;
HTTP.createServer((request, response) => {
	if(request.method === 'POST' && request.url === '/echo'){
		let body = [];
		request.on('data', (chunk) => {
			body.push(chunk);
		}).on('end', () =>{
			body = Buffer.concat(body).toString();
			response.end(body);
		});	
	} else {
		response.statusCode = 404; 
		response.end();
		
	}
}).listen(PORT, () => {
	console.info(`Listening on port ${PORT}`);
}); // Activates this server , listening on port 8080
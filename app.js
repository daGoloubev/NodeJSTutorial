const HTTP = require('http');
const IP = '127.0.0.1';
const PORT = 3000;
HTTP.createServer((request, response) => {
	request.on('error', (err) =>{
		console.error(err);
		response.statusCode = 400;
		response.end();
	});
	response.on('error', (err) => {
		console.error(err);
	});
	if(request.method === 'POST' && request.url === '/echo'){
		request.pipe(response)	
	} else {
		response.statusCode = 404; 
		response.end();
		
	}
}).listen(PORT, () => {
	console.info(`Listening on port ${PORT}`);
}); // Activates this server , listening on port 8080
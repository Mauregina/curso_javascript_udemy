const {createServer} = require('http')

let server = createServer((request, response)=> {
    response.writeHead(200, {'Content-type': 'text/html'})
    response.write(`
        <h1>Hello World!</h1>
    `)
    response.end()
})

server.listen(8000)
console.log('Ouvindo a porta 8000...')

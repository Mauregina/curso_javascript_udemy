let express = require('express')
let app = express() // instancia o express, permitindo que app tenha acesso a todos os metodos do framework


app.get('/', (req, res) => {
    res.send('Primeira rota com express')
});

app.listen(3000, ()=> {
    console.log('A aplicação está funcionando na porta 3000.')
})
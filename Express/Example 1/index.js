// Constantes
const express  = require('express');
const variabes = require('dotenv').config(); 
const app = express();

app.use(express.json());

app.get('/holamundo', (req, res) => {
    res.json({

        msg : "hola Mundo!"
        
    }); 
});

app.post('/userinfo', (req, res) => {
    const { username } = req.body;
    const { age } = req.body;

    res.json( { 
        username : username, 
        age : age
    });
});

app.listen(process.env.port, () => {
    var port = process.env.port
  });

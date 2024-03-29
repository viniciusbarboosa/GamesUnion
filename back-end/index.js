require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//ROTAS
const usuarioRoute = require('./src/routes/UsuarioRoute')
app.use('/api/Usuario',usuarioRoute)


app.listen(process.env.PORTA)
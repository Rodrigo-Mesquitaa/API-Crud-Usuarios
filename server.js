// código, configura nossa API para aceitar requisições de qualquer origem com o Cors.
// para retornar tudo em JSON.

const express = require('express');
const cors = require('cors');
const app = express();

// serve para que as rotas possa funcionar.
require('./src/Routes/index')(app); 

app.use(cors());
app.use(express.json());
app.listen(3333);
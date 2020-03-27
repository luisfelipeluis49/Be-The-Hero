const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// 
// Rota / Recurso
//

//
// Métodos HTTP:
//
// GET: Buscar/listar uma informação do backend
// POST: Criar uma informação do backend
// PUT: Alterar uma inforrmação do backend
// DELETE: Deletar uma informação do backend
// 

//
// Tipos de parâmetros:
//
// Query Params: Parâmetros  enviados na rota após "?" (Filtros, paginação)
// Route Params: Parâmetros utilizados para identificar recursos 
// Request Body: Corpo da tequisição, utilizado para criar ou alterar recursos
//

//
// Driver: SELECT * FROM users
// Query Builder: table('users').select('*').where()
//

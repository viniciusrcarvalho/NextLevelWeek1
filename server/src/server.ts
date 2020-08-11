import express, { request, response } from 'express';

import cors from 'cors';

import path from 'path';

import routes from './routes';

import { errors } from 'celebrate';

const app = express();


app.use(cors())

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());
app.listen(3333);






// Dia 2: explicação basica. código de cima inicia a aplicação
/*
import express, { request, response } from 'express';

const app = express();
app.use(express.json());

const users = [
    'Diego',
    'Thiago',
    'Mayk Brito na área',
    'Depois do npm install ts-node-dev -D'
];
// rota: users / recurso: lista de usuários
app.get('/users', (request, response) => {

    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);

});


// Request param: parametros que vem na própria rota que identificam um recurso
// Query param: parametros que vem na rota, geralmente opcionais para filtros, paginação
// Request body: 
 
app.get('/users/:id', (request, response) => {

    const id = Number(request.params.id);
    
    const user = users[id];

    return response.json(user);

});

app.post('/users', (request, response) => {

    const data = request.body;
    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user); // Para forçar a parada da req
     
})

app.listen(3333);

*/
// Toda vez que criar um arquivo de rota, basta importar ele no arquivo index de Routes.

const UsuarioController = require('../Controllers/UsuarioController');

module.exports = (app) => {
    app.post('/usuario', UsuarioController.post);
    app.put('/usuario/:id', UsuarioController.put);
    app.delete('/usuario/:id', UsuarioController.delete);
    app.get('/usuarios', UsuarioController.getById);
    app.get('/usuario/:id', UsuarioController.getById);
}
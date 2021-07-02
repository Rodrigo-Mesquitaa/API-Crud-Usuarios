// Routes onde vamos juntar todas as rotas da aplicação.

const UsuarioRoute = require('./UsuarioRoute');

module.exports = (app) => {
    UsuarioRoute(app)
}
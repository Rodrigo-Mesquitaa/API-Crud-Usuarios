// Controller é responsavel por controlar a maneira como um usuário interage com uma aplicação.
// É o controlador que determina que resposta será enviada de volta ao usuário quando ele faz uma requisição.

exports.post = (req, res, next) => {
    res.status(201).send('Rot a POST');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send('Rota PUT com ID! --> ${id}');
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send('Rota DELETE com ID! --> ${id}');
};

exports.get = (req, res, next) => {
    res.status(200).send('Rota GET!');
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send('Rota GET com ID! ${id}');
};
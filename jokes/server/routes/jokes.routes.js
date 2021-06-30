const JokesController = require('../controllers/jokes.controller');
// the routes needs to pull in the controller

module.exports = (app) => { // need the express server app to
    app.get('/api/jokes', JokesController.getAll);  //get takes two parameters, first is the url
    app.post('/api/jokes', JokesController.create);
    // app.get('/api/jokes/:id', JokesController.details);
    // app.put('/api/jokes/:id', JokesController.edit);
    // app.delete('/api/jokes/:id', JokesController.delete);
} 
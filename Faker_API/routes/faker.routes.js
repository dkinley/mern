const { response } = require('express');

module.exports = (app) => { // need the express server app to
    app.get('/api/users/new', (request, response) => {
        const newUser = createUser();
        response.json(newUser)
    });

    app.get('/api/companies/new', (request, response) => {
        const newCompany = createCompany();
        response.json(newCompany)
    });

        app.get('/api/user/company', (request, response) => {
        const newCompany = createCompany();
        const newUser = createUser();
        response.json({company: newCompany, user: newUser});
    });
} 
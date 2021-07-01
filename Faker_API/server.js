const express = require ('express');
const app = express ();
const cors = require('cors');
const port = 8000;
const faker = require('faker');

app.use(express.json());
app.use(express.urlencoded( { extended : true} ) );
app.use(cors());

require('./routes/faker.routes')(app);

// we can create a function to return a random / fake "User Object"
const createUserObject = () => {
    const newUserObject = {
        nameFirst: faker.name.firstName(),
        nameLast: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        password: faker.name.middleName(),
    };
    return createUserObject;
};

const createCompany = () => {
    return {
        companyName: faker.company.companyName(),
        department: faker.commerce.department(),
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country(),
        }
    }
    
const newFakeUserObject = createUserObject();
console.log(newFakeUserObject);

app.listen(port, () => console.log("Listening on port:  " + port));



const Jokes = require('../models/jokes.model')

module.exports = {
    getAll: (req, res) => {  // the getAll is the key, the value is the entire anonymous object
        Jokes.find({}) //this is going to use the model connection to the db
                        // 'find' returns an array by default 
            .then((allJokes) => {
                console.log(allJokes);
                res.json(allJokes); // this is the return from the route
            })
            .catch((err) => {
                console.log("error was found in the returning all via getAll");
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {  
        console.log(req.body); //whenever creating, it's good to console log
        Jokes.create(req.body) // no {} as it is already an object, the req (request) is already an object
            .then((newJoke) => {  //this is new 
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch((err) => {
                console.log("error was found in the create controller");
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {  //need ID to bring one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Jokes.findById(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((oneJoke) => {  //this is getting one
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err) => {
                console.log("error triggered in the getOne controller");
                console.log(err);
                res.json(err);
            });
    },

    update: (req, res) => {  //mongodb requires two pieces 1)query, i.e. what to find, 2) 
        console.log(req.params.id);
        console.log(req.body);

        Jokes.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        }) // no {} as it is already an object, the req (request) is already an object
            .then((updatedJoke) => {  //this is new 
                console.log(updatedJoke);
                res.json(updatedJoke);
            })
            .catch((err) => {
                console.log("error was found in the update");
                console.log(err);
                res.json(err);
            });
    },
    delete: (req, res) => {  //need ID to delete one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Jokes.findByIdAndDelete(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((deletedJoke) => {  //this is getting one
                console.log(deletedJoke);
                res.json(deletedJoke);
            })
            .catch((err) => {
                console.log("error was found in the delete");
                console.log(err);
                res.json(err);
            });
    },

}
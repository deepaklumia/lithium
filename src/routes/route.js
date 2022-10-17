const express = require("express");
const { values } = require("lodash");
const abc = require("../introduction/intro");
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// Example 1 for path params
router.get('/students', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.query;

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

router.get("/movie", function (req, res) {
    let movie = [
        "K.G.F",
        "game of thrones",
        "saho",
        "kantara",
        "R.R.R",
        "Pushpa",
    ];
    res.send(movie.join(", "));
});
router.get("/movie/:indexNumber", function (req, res) {
    let movies = [
        "Rang de basanti",
        "The shining",
        "Lord of the rings",
        "Batman begins",
    ];
    let indexNumber = req.params.indexNumber;
    console.log(indexNumber);
    res.send(movies[indexNumber]);
});
router.get("/movies/:indexNumber", function (req, res) {
    let movies = [
        "Rang de basanti",
        "The shining",
        "Lord of the rings",
        "Batman begins",
    ];
    let indexNumber = req.params.indexNumber;
    console.log(indexNumber);
    if (indexNumber < movies.length) {
        res.send(movies[indexNumber]);
    } else {
        res.send("the user to use a valid index in an error message");
    }
});
router.get("/films", function (req, res) {
    const films = [
        {
            id: 1,
            name: "The Shining",
        },
        {
            id: 2,
            name: "Incendies",
        },
        {
            id: 3,
            name: "Rang de Basanti",
        },
        {
            id: 4,
            name: "Finding Nemo",
        },
    ];
    res.send(films);
});
router.get("/films/:id", function (req, res) {
    const films = [
        {
            id: 1,
            name: "The Shining",
        },
        {
            id: 2,
            name: "Incendies",
        },
        {
            id: 3,
            name: "Rang de Basanti",
        },
        {
            id: 4,
            name: "Finding Nemo",
        },
    ];
    let id = Number(req.params.id);
    let filmsWithId;
    if (id >= 1 && id <= 4) {
        filmsWithId = films.filter((values) => {
            if (values.id == id) {
                return true;
            }
        });
        res.send(filmsWithId);
    } else {
        res.send("No movie exists with this id");
    }
});

module.exports = router;

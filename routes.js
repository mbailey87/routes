// http://localhost:3000/users/jsmith/books/where%20is%20my%20book
// req.params = {"userId":"jsmith","bookId":"where is my book"}
// '/users/:userId/books/:bookId'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');  


app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json('limit: 1mb'));

app.post('/newStudent', (req, res) => { 
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const msg = `Name: ${name}, Age: ${age} email: ${email}`;
    res.send(msg);
    });

app.get('/students?', (req, res) => {
    res.send(`Hello World ${process.env.STATUS}` );
    });



app.get('/ab*cd', (req, res) => {
    res.send('got it');
    });

app.get(/.*fly$/, (req, res) => {
    res.send('got it with regex');
    });

app.get('/users/:userId/books/:bookId', (req, res) => {
    let user = req.params.userId;
    let book = req.params.bookId;
    let msg = `User ID: ${user}, Book ID: ${book}`;   
    console.log(req.params);
    res.send(msg);
    });

app.get('/class/:from-:to', (req, res) => {
    let from = req.params.from;
    let to = req.params.to;
    let msg = `class is From: ${from}, To: ${to}`;
    console.log(req.params);
    res.send(msg);
    });

    

app.listen(port, () => {
  console.log('Server is running on port ' + port); 
});

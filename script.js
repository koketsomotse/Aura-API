//import all modules

const express = require('express');
const Joi = require('joi');
const app = express();
var path = require('path');
const userRoute = require('./routers/user');
const postRoute = require('./routers/posts');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', postRoute);
app.use('/users', userRoute);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static("public"));




app.use('/user', userRoute);
app.use('/posts', postRoute);
app.listen(3000, () => {
    console.log('It is running here!');
});
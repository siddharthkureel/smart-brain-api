const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const bcrypt = require('bcrypt-nodejs');
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '',
        database: 'smartbrain'
    }
});
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{res.json('everthing is ok')})
app.post('/signin', (req, res) => { signin.handleSignin(req, res, bcrypt, knex) })
app.post('/register',(req,res)=>{register.handleRegister(req,res, bcrypt, knex)})
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, knex) })
app.put('/image', (req, res) => { image.handleImage(req, res, knex) })
app.post('/imageurl', (req, res) => { image.handleApi(req, res) })
app.listen(3000, () => console.log('Example app listening on port 3000!'));
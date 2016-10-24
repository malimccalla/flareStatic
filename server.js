var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var firebase = require('firebase');

var PORT = process.env.PORT || 3000

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API,
  authDomain: 'flare-1ef4b.firebaseapp.com',
  databaseURL: 'https://flare-1ef4b.firebaseio.com',
  storageBucket: 'flare-1ef4b.appspot.com',
  messagingSenderId: '1031183019465'
});

var ref = firebase.database().ref();
var emailInvites = ref.child('email invites');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  console.log(app.routes);
  res.sendFile('index.html');
});

app.get('*', function(req, res) {
  res.send('You must be drunk')
})


app.post('/', function(req, res) {
  var email = req.body.email
  var date = req.body.date
  if ( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ) {
    console.log(email);
    emailInvites.push({ email, date, invited: false });
    res.status(200).send('Email sent to firebase')
  }
  res.status(422).send({ error: 'Please enter a valid email' });
});

app.listen(PORT);
console.log('Listening on port 3000');

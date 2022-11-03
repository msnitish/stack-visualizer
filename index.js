// Import the express dependency 
const express = require('express');
const path = require('path');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('views', __dirname + '/views');

// Set the Templating engine which shall generate the HTML files.
app.set("view engine", "ejs");

//  Choose a port for the express server to listen to.
const port = 5000;

// Importing the Stack class from file. (Stack was implemented using a Javascript array)
const Stack = require('./stack.js');

// We instantiate a stack object with default maximum size as 5
var stack = new Stack(5);

// Default error code is 0.
// error code for Stack overflow is 1.
// error code for Stack underflow is 2. 
var error_code = "0";

// Home page of the app. 
// Display stack contents
app.get('/', function (req, res){
   res.render('page',{
    stack : stack,
    size : stack.size().toString(),
    max_size : stack.max_size,
    error_code : error_code
    });
});

// Set the size of stack 
app.post('/set_size', function(req, res){
    console.log(req.body);
    stack.max_size = req.body.max_size;
    if(req.body.max_size > stack.size()) error_code = "0"
    res.redirect('/');
});
 
// Push an element into the stack
app.post('/push', function(req, res){
    console.log(req.body.push_number);
    if(stack.push(req.body.push_number) == "overflow"){
        error_code = "1";
    }
    if(stack.size() >= 1 && error_code == "2"){
        error_code = "0";
        console.log("after pushing elems");
    }
    res.redirect('/');
});

// Pop an element from the stack
app.post('/pop', function(req,res){
    console.log(req.body);
    if(stack.size() <= stack.max_size) error_code = "0";
    console.log("error code after /pop is " + error_code);
    if(stack.pop() == "underflow"){
        error_code = "2";
    }
    res.redirect('/');
});




app.listen(port, ()=>{
  console.log(`Now listening to port ${port}`);
});

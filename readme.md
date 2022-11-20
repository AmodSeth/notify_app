# Notify app 


#requirements
- express
- mongoose
- cors
- rest client

## inital template setup
```const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());



## first time usage things
- rest client - make a new file named as requests.rest
- use this syntax
``` GET http://localhost:3001/todos
passing the post request
- ### means new api
```POST http://localhost:3001/todo/new
Content-Type: application/json

{
    "text": "hello wrold"
}

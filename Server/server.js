const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Amod:amodseth@basic-testing.j89ooud.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{console.log("database connected.....")}).catch(console.error);

const Todo = require('./model/Todo');


//if we make a request and find all the todos and then gives back the json object
app.get("/todos", async(req,res)=>{
    const todos = await Todo.find();


    res.json(todos);
});

app.post('/todo/new',(req,res)=>{
    const todo = new Todo ({
        text: req.body.text
    });

    todo.save();
    res.json(todo);
})

//delete operations

app.delete('/todo/delete/:id',async(req,res)=>{
    const data = await Todo.findByIdAndDelete(req.params.id);
    res.json(data);
});

app.get('/todo/complete/:id',async(req,res)=>{
    const todo = await Todo.findById(req.params.id);

    todo.complete =! todo.complete;

    todo.save();

    res.json(todo);

})

app.listen(3001,()=>console.log("server started on 3001"));
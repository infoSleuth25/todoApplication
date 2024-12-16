const express = require('express');
const app = express();
const port =3000;
const {createTodo, updateTodo} = require('./types');
const { todo } = require('./src/models/todos');
const cors = require('cors');

require('./src/db/conn');

app.use(express.json());
app.use(cors())

app.get('/todos',async function(req,res){
    const todos = await todo.find({});
    res.json({todos});
})

app.post('/todo',async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You have provided wrong input"
        })
        return ;
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg : "Todo Created"
    })
})

app.put('/completed',async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You have provided wrong input"
        })
        return ;
    }
    await todo.updateOne({ _id: updatePayload.id }, { $set: { completed: true} });
    res.json({
        msg : "Todo marked as completed"
    })
})

app.listen(port,function(req,res){
    console.log(`App is listen at port ${port}`);
})
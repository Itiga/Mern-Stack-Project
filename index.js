const express = require("express");
const app = express();
const port = 3000;

const todos = [
    {
        id: 1,
        desc: "Write Python code",
        completed: false,
    },
    {
        id: 2,
        desc: "Write Javascript Code",
        completed: true,
    },
];
app.get("/",(req,res,next) => {
    res.send("To Do List");
});


app.get("/todos", (req,res) => {
    res.json(todos);
});

app.get("/todos/:id", (req,res) => {
    console.log(req.params.id);
    let  todo = todos.filter((todo) => todo.id == req.params.id);
    res.json(todo);
});

app.listen(port, () => {
    console.log("App is listening in PORT:",port);
});

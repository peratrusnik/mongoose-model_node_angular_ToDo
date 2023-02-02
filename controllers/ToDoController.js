const Todo = require("../models/Todo")

function getAll(req,res) {
    Todo.find({}, (err, docs) => {
        res.send(docs)
    })
}

function filterDotos(req,res) {
    let level = req.params.level
    Todo.find({ level: level }, (err, docs) => {
        res.send(docs)
    })    
}
function createTodo(req, res) {
    Todo.create(req.body, (err, docs) => {
        Todo.find({}, (err, todos) => {
            res.send(todos)            
        })
    })
}

function deleteTodo(req, res) {
    let id = req.params.id;
    Todo.deleteOne({ _id: id }, (err, docs) => {
        res.sendStatus(200)
    })
}

module.exports = {
    getAll,
    filterDotos,
    createTodo,
    deleteTodo
}
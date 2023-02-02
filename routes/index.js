const express = require('express')
const ToDoController = require('../controllers/ToDoController')
const router = new express.Router()


router.get('/todos', ToDoController.getAll)
router.get('/todos/:level', ToDoController.filterDotos)

router.delete('/todos/:id', ToDoController.deleteTodo)
router.post('/todo', ToDoController.createTodo)

module.exports = router;
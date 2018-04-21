var reno = require('../reno');
var app = reno.app;
var config = reno.config;

var Todo = require('./todoModel');
var utils = require('../common/utils');

app.get('/todo/', function (req, res, next) {
    Todo.find().exec(function (error, todos) {
        if (error) {
            utils.errorJson(res, 'Error when getting todo list', error);
        } else {
            res.json({
                status: true,
                todos: todos
            });
        }
    });
});

app.get('/todo/:todoId', function (req, res, next) {
    Todo.findById(req.params.todoId).exec(function (error, todo) {
        if (error) {
            utils.errorJson(res, 'Error when getting todo', error);
        } else {
            res.json({
                status: true,
                todo: todo
            });
        }
    });
});

app.post('/todo/:todoId/toggle', function (req, res, next) {
    Todo.findById(req.params.todoId).exec(function (error, todo) {
        if (error) {
            utils.errorJson(res, 'Error when getting todo', error);
        } else {
            todo.completed = !todo.completed;
            
            todo.save(function (error) {
                if (error) {
                    utils.errorJson(res, 'Error when toggling todo', error);
                } else {
                    res.json({
                        status: true
                    });
                }
            });
        }
    });
});

app.post('/todo/:todoId/delete', function (req, res, next) {
    Todo.findByIdAndRemove(req.params.todoId).exec(function (error) {
        if (error) {
            utils.errorJson(res, 'Error when getting todo', error);
        } else {
            res.json({
                status: true
            });
        }
    });
});

app.post('/todo/new', function (req, res, next) {
    var todo = new Todo(req.body);
    todo.save(function (error, newTodo) {
        if (error) {
            utils.errorJson(res, 'Error when saving new todo', error);
        } else {
            res.json({
                status: true,
                todo: newTodo
            });
        }
    });
});

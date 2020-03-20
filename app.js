const express = require('express');
const bodyParser = require('body-parser');
const Task = require('./models/Task');
const TaskList = require('./models/TaskList');
const app = express();
const port = 8080

// set the setting to ejs
app.set('views', './views');
app.set('view engine', 'ejs');

// middleware to read the request body
app.use(bodyParser.urlencoded({ extended: true }));

// render  index page 
app.get('/', (req, res) => {
    res.render('index', { tasks: list.tasks });

});
// created a task list to hold tasks
const list = new TaskList();

// render add task form page
app.get('/addTask', (req, res) => {
    res.render('addTask', { tasks: list.tasks });
});


app.post('/addTask', (req, res) => {
    // const { title, description, isComplete } = req.body

    const task = new Task(req.body.title, req.body.description);
    list.addTask(task);
    console.log(list);
    res.redirect('/');
});

app.get("/tasks/:id", (req, res) => {
    const id = req.params.id;
    res.render('index', { tasks: list.tasks[id] })
})
// // manipulating data the user sends in post request
// // request body is a sent as string so we want to parse the data using middleware
// app.post('/addTask', (req, res) => {
//     const task = new Task(req.body.taskName, req.body.description)
//     tasks.push(task);
// })


app.listen(port, () => {
    console.log(`runnging on port ${port}`);
});

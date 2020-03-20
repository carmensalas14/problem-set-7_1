const express = require('express');
const bodyParser = require('body-parser');
const Task = require('./models/Task');
const TaskList = require('./models/TaskList');
const app = express();
const port = process.env.PORT || 3000

// set the setting to ejs
app.set('views', './views');
app.set('view engine', 'ejs');

// middleware to read the request body
app.use(bodyParser.urlencoded({ extended: true }));

// setting a public folder for our static files 
app.use(express.static('public'));

// created a task list to hold tasks
const list = new TaskList();

// render  index page 
app.get('/', (req, res) => {
    res.render('index', { tasks: list.tasks });

});

// render update task page
app.get("/update/:id", (req, res) => {
    const id = req.params.id;
    res.render('updateTask', { tasks: list.tasks[id] })
})


// render add task form page
app.get('/addTask', (req, res) => {
    res.render('addTask', { tasks: list.tasks });
});


app.post('/addTask', (req, res) => {
    const task = new Task(req.body.title, req.body.description);
    list.addTask(task);
    console.log(list);
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    list.deleteTask(id);
    res.redirect('/');
})

app.post('/complete/:id', (req, res) => {
    const id = req.params.id;
    list.markComplete(id);
    res.redirect('/');
})


app.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    list.updateTask(id, title, description);
    console.log(list);
    res.redirect('/');
});



app.listen(port, () => {
    console.log(`runnging on port ${port}`);
});

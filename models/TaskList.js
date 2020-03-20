class TaskList {
    constructor() {
        this.tasks = {};
        this.count = 0;
    }

    addTask(task) {
        this.tasks[task.id] = task;
        return ++this.count;
    }

    deleteTask(id) {
        const deletedTask = this.tasks[id];
        delete this.tasks[id];
        this.count -= 1;
        return deletedTask;

    }

    deleteAllTasks() {
        this.tasks = {}
        this.count = 0;
    }

    updateTask(id, newTitle, newDescription) {
        this.tasks[id].title = newTitle;
        this.tasks[id].description = newDescription;
    }

    markComplete(id) {
        this.tasks[id].isComplete = true;
    }
}

module.exports = TaskList;

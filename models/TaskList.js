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

    updateTask(id, newName, newDescription) {
        this.tasks[id].name = newName;
        this.tasks[id].description = newDescription;
        return this.tasks[id];
    }
    markComplete(id) {
        this.tasks[id].isComplete = true;
        return this.tasks[id].isComplete
    }
}

module.exports = TaskList;

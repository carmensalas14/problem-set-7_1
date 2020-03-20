function Task(title, description, ) {
    this.id = ++Task.count
    this.title = title
    this.description = description
    this.isComplete = false
}

Task.count = 0;

module.exports = Task;

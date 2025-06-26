"use strict";
class Task23 {
    title;
    description;
    completed = false;
    _createdBy;
    constructor(title, description, createdBy) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    get createdBy() {
        return this._createdBy;
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
    getDetails() {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`;
    }
    static createSampleTasks() {
        return [
            new Task23('jeep', 'da', 'yes'),
            new Task23('jeep', 'da', 'yes')
        ];
    }
}
const task12 = new Task23("Complete homework", "Finish math exercises", "Charlie");
task12.toggleStatus();
console.log(task12.getDetails());
const tasks = Task23.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));
//# sourceMappingURL=12.js.map

class Task23 {
    title: string;
    description: string;
    completed = false;
    private _createdBy: string

    constructor(title: string, description: string, createdBy: string) {
        this.title = title
        this.description = description
        this._createdBy = createdBy;
    }

    get createdBy() {
        return this._createdBy
    }

    toggleStatus(): void {
        this.completed = !this.completed
    }

    getDetails(): string {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`
    }

    static createSampleTasks(): Task23[] {
        return [
            new Task23('jeep', 'da', 'yes'),
            new Task23('jeep', 'da', 'yes')
        ]
    }
}

const task12 = new Task23("Complete homework",

"Finish math exercises", "Charlie");

task12.toggleStatus();

console.log(task12.getDetails());

const tasks = Task23.createSampleTasks();

tasks.forEach(task =>

console.log(task.getDetails()));
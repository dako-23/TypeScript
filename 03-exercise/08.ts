
type taskStatus = 'Logged' | 'Started' | 'InProgress' | 'Done'

type User = {
    username: string,
    signupDate: Date
}

type Task = {
    status: taskStatus,
    title: string,
    daysRequired: number,
    assignedTo: {
        username: string,
        signupDate: Date

    } | undefined,
    changeStatus(newStatus: taskStatus): void
}

const assignTask = (user: User, task: Task) => {

}

let user = {

    username: 'Margaret',

    signupDate: new Date(2022, 1, 13),

    passwordHash: 'random'

}

let task1 = {

    status: <'Logged' | 'Started' | 'InProgress' | 'Done'>'Logged',

    title: 'Need assistance',

    daysRequired: 1,

    assignedTo: undefined,

    changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done') {

        this.status = newStatus;
    }

}


let task2 = {

    status: <'Logged' | 'Started' | 'InProgress' | 'Done'>'Done',

    title: 'Test',

    daysRequired: 12,

    assignedTo: undefined, changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done') { this.status = newStatus; }, moreProps: 300, evenMore: 'wow'
}
assignTask(user, task1);
assignTask(user, task2);
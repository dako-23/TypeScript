class User2 {

    private _username!: string

    constructor(username: string) {
        this.username = username
    }

    get username() {
        return this._username
    }

    set username(newUsername: string) {
        if (newUsername.length < 3) {
            throw new Error('Username must be at least 3 chars')
        }

        this._username = newUsername
    }
}

const user1 = new User2('Dako')
console.log(user1.username);
user1.username = 'Em'
console.log(user1.username);


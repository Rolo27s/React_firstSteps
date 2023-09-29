console.log("Clases y módulos");
class Greeter {
    name = "unnamed";
    static greetWord = "Hello";

    constructor({ name }) {
        this.name = name;
    }

    greet() {
        return `${Greeter.greetWord}, I'm ${this.name}`;
    }
}

class User extends Greeter {
    surname = "";
    constructor({ name, surname }) {
        super({ name });
        this.surname = surname;
    }
    greet() {
        return super.greet() + ` ${this.surname}`;
    }
}

const user2 = new User({ name: "John", surname: "Doe" });
console.log(user2.greet());
Greeter.greetWord = "Goodbye";
console.log(user2.greet());
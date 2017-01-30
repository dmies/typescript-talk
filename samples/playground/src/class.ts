class Greeting {
    constructor(private greeting: string = 'World') { }

    greet = () => console.log(`Hello ${this.greeting}!`);
}

let greeting = new Greeting();
greeting.greet();

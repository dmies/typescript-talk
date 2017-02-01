class Greeting {
    constructor(private greeting: string = 'World') { }

    greet = () => console.log(`Hello ${this.greeting}!`);

    greet2 = function(){
        console.log(`Hello ${this.greeting}!`);
    }
}

let greeting = new Greeting();
greeting.greet();

setTimeout(greeting.greet, 1000);

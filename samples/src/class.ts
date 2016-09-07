class Greeting{
    constructor(private greeting:string){}

    greet = () => {
        console.log(`Hello ${this.greeting}`);
    }
}
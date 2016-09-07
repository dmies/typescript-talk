###Classes

```
class Greeting{
    private greeting: string;

    constructor(greeting:string){
        this.greeting=greeting;
    }

    greet = function(){
        console.log("Hello "+this.greeting);
    }
}
```
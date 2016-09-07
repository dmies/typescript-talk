###Classes

```
class Greeting{
    private _greeting: string;

    get greeting(): string{
        console.log("getter called");
        return this._greeting;
    }

    constructor(greeting:string){
        this._greeting=greeting;
    }

    greet = function(){
        console.log("Hello "+this.greeting);
    }
}
```
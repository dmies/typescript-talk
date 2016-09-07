###Structural Typing

```
interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named = new Person();
```
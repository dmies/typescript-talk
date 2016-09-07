###Errors at compile time

```
function add (a:number, b:number):number {
    return a+b;
}

add("Hello", " World");
```

Error: Argument of type 'string' is not assignable to parameter of type 'number'.<!-- .element: class="fragment" -->
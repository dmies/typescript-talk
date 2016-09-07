###Interfaces

```
interface User{
    id: string;
    username: string;
    birthday?: Date;
}

const user:User = {
    id:'213',
    username:'bob'
}
```

- e.g. for data offered by a REST interface<!-- .element: class="fragment" -->
- optional types allow high flexibility<!-- .element: class="fragment" -->
- great IDE support thanks to autocompletion<!-- .element: class="fragment" -->
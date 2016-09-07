## Literal Types

```
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
let nums: Digit[] = [1, 2, 4, 8];

// Error! '16' isn't a 'Digit'!
nums.push(16);
```

- each unique boolean, number, and enum member has its own type<!-- .element: class="fragment" -->
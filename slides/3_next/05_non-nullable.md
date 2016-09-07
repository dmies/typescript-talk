## Non-nullables

```
let foo: string = null; // Error!

let foo: string | null = null; // Okay!

declare let strs: string[] | undefined;

// Error! 'strs' is possibly undefined.
let upperCased = strs.map(s => s.toUpperCase());

// 'strs!' means we're sure it can't be 'undefined', so we can call 'map' on it.
let lowerCased = strs!.map(s => s.toLowerCase());
```

- new flag strictNullChecks for tsconfig.json<!-- .element: class="fragment" -->
- Compiler reports error if value is null or undefined<!-- .element: class="fragment" -->
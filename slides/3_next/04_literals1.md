## Literal Types

```
interface Success<T> {
    success: true;
    value: T;
}

interface Failure {
    success: false;
    reason: string;
}

type Result<T> = Success<T> | Failure;
```
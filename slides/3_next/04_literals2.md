## Literal Types

```
declare function tryGetNumUsers(): Result<number>;

let result = tryGetNumUsers();
if (result.success === true) {
    // 'result' has type 'Success<number>'
    console.log(`Server reported ${result.value} users`);
}
else {
    // 'result' has type 'Failure'
    console.error("Error fetching number of users!", result.reason);
}
```
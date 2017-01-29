## Tagged Union Types

```
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            // 'shape' is a 'Circle' here.
            return Math.PI * shape.radius ** 2;

        case "square":
            // 'shape' is a 'Square' here.
            return shape.sideLength ** 2;
    }
}
```

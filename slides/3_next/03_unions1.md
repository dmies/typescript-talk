## Tagged Union Types

TypeScript 1.8:

```
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            // Convert from 'Shape' to 'Circle'
            let c = shape as Circle;
            return Math.PI * c.radius ** 2;

        case "square":
            // Convert from 'Shape' to 'Square'
            let sq = shape as Square;
            return sq.sideLength ** 2;
    }
}
```

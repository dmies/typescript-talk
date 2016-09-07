###Classes

```
class LimitedValue {
    private _value: number;

    get value(): number {
        return this._value;
    }
    set value(value: number) {
        if (value > this.max) {
            value = this.max;
        }
        this._value = value;
    }
    constructor(private max: number = 100) {
        this.value = 0;
    }
}
```
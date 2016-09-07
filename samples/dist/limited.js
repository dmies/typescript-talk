var LimitedValue = (function () {
    function LimitedValue(max) {
        if (max === void 0) { max = 100; }
        this.max = max;
        this.value = 0;
    }
    Object.defineProperty(LimitedValue.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (value > this.max) {
                value = this.max;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    return LimitedValue;
}());
var limit = new LimitedValue(50);
limit.value = 30;
console.log(limit.value);
limit.value = 80;
console.log(limit.value);
//# sourceMappingURL=limited.js.map
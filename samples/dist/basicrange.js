var Limited = (function () {
    function Limited(max) {
        if (max === void 0) { max = 100; }
        this.max = max;
        this.value = 0;
    }
    Object.defineProperty(Limited.prototype, "value", {
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
    return Limited;
}());
var limited = new Limited(50);
limited.value = 30;
console.log(limited.value);
limited.value = 80;
console.log(limited.value);
//# sourceMappingURL=basicrange.js.map
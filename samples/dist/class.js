var Greeting = (function () {
    function Greeting(greeting) {
        var _this = this;
        this.greeting = greeting;
        this.greet = function () {
            console.log("Hello " + _this.greeting);
        };
    }
    return Greeting;
}());
//# sourceMappingURL=class.js.map
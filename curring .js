function curringFunction(a) {
    return function (b) {
        return a * b
    }
};


// const result = curringFunction(5);
console.log(curringFunction(8)(5));